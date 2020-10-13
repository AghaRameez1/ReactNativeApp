import React from 'react';
import { Text, View, Alert } from 'react-native';
import { createAppContainer, NavigationEvents } from 'react-navigation';
import CustomBtn from '../mainComponents/userBtn';
import Input from '../mainComponents/input';
import AsyncStorage from '@react-native-community/async-storage';
import PushNotification from 'react-native-push-notification';
export default class TaskScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    }
  }
  componentDidMount() {
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
  handleremail = (email) => {
    this.setState({
      email: email
    });
  }
  handlerpassword = (password) => {
    this.setState({
      password: password
    })
  }
  submit = async () => {
    if (this.state.email === '') {
      alert('Email Cant be Empty')
    }
    else if (this.state.password === '') {
      alert('Password Cant be Empty')
    }
    else {
      try {
        const response = await fetch('https://meanstacktodo1.herokuapp.com/login/', {
          method: 'post',
          body: JSON.stringify({
            username: this.state.email,
            password: this.state.password
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8"
          }
        }).then(response => {       
          if (response.status == '200') {
            response.json().then(token => {
              alert('Your Token ' + token['token'])

              try {
                AsyncStorage.setItem('@storage_Key', token['token'])
                this.props.navigation.navigate('TODO')
              } catch (e) {
                console.error(e)
              }
            });
          }
          else{
            PushNotification.localNotification({ color: "red", vibrate: true, priority: 'high', title: 'Incorrent Credentials', message: 'Wrong Username and Password', playSound: true })
          }
        });
      }
      catch (error) {
        console.error(error)
      }
    }
  }
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'red' }} >
        <View style={{ flex: .7, borderRadius: 20, backgroundColor: '#d9d9d9' }}>
          <Input autoCapitalize='none' onChangeText={this.handleremail} iconname='md-mail' icontype='ionicon' backgroundColor='white' height={45} borderBottomWidth={1} borderBottomColor='blue' placeholder='Email' paddingTop={10} paddingLeft={7} InputRef={ref => (this.firstTextInput = ref)}
            onSubmitEditing={() => this.secondTextInput.focus()} blurOnSubmit={false}></Input>
          <Input autoCapitalize='none' onChangeText={this.handlerpassword} iconname='ios-key' icontype='ionicon' backgroundColor='white' height={45} borderBottomWidth={1} borderBottomColor='blue' placeholder='Password' paddingLeft={10} secureTextEntry={false} showIcon={true}
            iconname2='md-eye' icontype2='ionicon' InputRef={ref => (this.secondTextInput = ref)}></Input>

          <CustomBtn OnPress={this.submit} viewMarginTop={20} viewMarginRight={40} viewMarginLeft={30} viewElevation={50} backgroundColor='#02A266' alignItems='center' marginHorizontal={10} height={50} marginRight={20} justifyContent='center' borderRadius={5}>
            <Text>Log in</Text>
          </CustomBtn>
        </View>
      </View>
    )
  }
}