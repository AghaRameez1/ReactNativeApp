import React from 'react';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { StyleSheet, View } from 'react-native';

const Maps = props => {
    let {latitude,longitude}= props
    console.log(props)
    if (latitude ===undefined && longitude ===undefined){
        latitude = 33.6862705,
        longitude = 73.6862705
    }
    
    const region = {
        latitude: latitude,
        longitude: longitude,
        latitudeDelta: 0.0022,
        longitudeDelta: 0.0021,
    };
    return (
        <View style={styles.Mapcontainer}>
            <MapView
                provider={PROVIDER_GOOGLE}
                style={styles.map}
                showsUserLocation={ true }
                region={region}
            >
                <MapView.Marker
                    coordinate={region}
                    title={props.name}
                    description={props.note}
                />
            </MapView>
        </View>
    )
}
const styles = StyleSheet.create({
    Mapcontainer: {
        // borderWidth:2,
        height: 205,
        width: 350,
        marginLeft: 5,
        marginBottom: 5
    },
    map: {
        height: '100%',
        width: '100%',
    },
});

export default Maps;