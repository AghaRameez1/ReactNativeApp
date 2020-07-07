import React from 'react';
import MapView from "react-native-map-clustering";
import { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { Dimensions, StyleSheet, View, Button, Text } from 'react-native';
import { PermissionsAndroid } from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import PushNotification from 'react-native-push-notification';
import { TouchableOpacity } from 'react-native-gesture-handler';
let { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE = 0;
const LONGITUDE = 0;
const LATITUDE_DELTA = 30;
const LONGITUDE_DELTA = 50;
export default class GoogleMaps extends React.Component {
  constructor() {
    super();
    this.state = {
      markers: [],
      region: {
        latitude: LATITUDE,
        longitude: LONGITUDE,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA
      }
    };
  }
  componentDidMount = async () => {
    try {
      const response = await fetch('http://192.168.18.102:3000/list');
      PushNotification.localNotification({ vibrate: true, priority: 'high', title: 'NETWORK available', message: 'The server is connected', playSound: true })
      const responseJson = await response.json();
      this.setState({
        markers: responseJson,
      })
    }
    catch (error) {
      PushNotification.localNotification({ vibrate: true, priority: 'high', title: 'NETWORK UNAVAILABLE', message: 'The server is not available', playSound: true })
      
    }
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          'title': 'APP wants Location Permission',
          'message': 'APPS WANTS YOUR LOCATION ',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        }
      )
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        Geolocation.getCurrentPosition(
          (position) => {
            this.setState({
              region: {
                latitude: position['coords']['latitude'],
                longitude: position['coords']['longitude'],
                latitudeDelta: 50,
                longitudeDelta: 50,
              }
            })
          },
          (error) => {
            // See error code charts below.
            console.log(error.code, error.message);
          },
          { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
        );
      }
    } catch (err) {
      console.warn(err)
    }
  }

  render() {
    return (
      <View style={{flex:1}}>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.Mapcontainer}
          showsUserLocation={true}
          region={this.state.region}
          onRegionChangeComplete={region => this.setState({ region })}

        >
          {this.state.markers.map(marker1 =>
            <Marker
              coordinate={{ latitude: marker1.latitude, longitude: marker1.longitude }}
              title={marker1.name}
              description={marker1.note}
            />
          )}
        </MapView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  Mapcontainer: {
    flex:1,
    position:'absolute',
    height: '100%',
    width: '100%',
  },
  button:{
    // position: 'absolute',
    width: 90,
    height: 40,
    left: 150,
    borderRadius:25,
    backgroundColor:'red',
  }
});