import React from 'react';
import { Text, View, Button} from 'react-native';
import { createAppContainer, NavigationEvents } from 'react-navigation';
import AsyncStorage from '@react-native-community/async-storage';
export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.getData();
    
  }
  getData = async () => {
    try {
      const value = await AsyncStorage.getItem('@storage_Key')
      if (value !== null) {
        this.props.navigation.navigate('TODO')
      }
    } catch (e) {
      // error reading value
    }
  }
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Welcome to Home Screen</Text>
          <View style={{flex:1,justifyContent:'space-evenly'}}>
          <Button
            title="Go to Login"
            onPress={() => this.props.navigation.navigate('Task')}
          />
          <Button
            title="Go to Sign Up"
            onPress={() => this.props.navigation.navigate('Register')}
          />
          <Button
            title="Go to Maps"
            onPress={() => this.props.navigation.navigate('GoogleMap')}
          />
          <Button
            title="Go to Reading Screen"
            onPress={() => this.props.navigation.navigate('ReadMessage')}
          />
          <Button
            title="Go to Client Screen"
            onPress={() => this.props.navigation.navigate('Client')}
          />
          </View>
        </View>
      )
    }
  }