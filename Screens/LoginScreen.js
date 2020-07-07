import React from 'react';
import { Text, View, Button } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage'
export default class LoginScreen extends React.Component {
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
        <Text>Welcome to Login Screen</Text>
        <View style={{flex:1,justifyContent:'space-evenly'}}>
        <Button
          title="Go to TODO Screen"
          onPress={() => this.props.navigation.navigate('TODO')} />
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
        </View>
      </View>
    )
  }
}