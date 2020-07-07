import React from 'react';
import { Text, View } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import CustomBtn from '../mainComponents/userBtn';
import Input from '../mainComponents/input';
export default class RegisterScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      confirm_password: '',
    }
  }
  handleremail = (email) => {
    this.setState({
      email: email
    })
  }
  handlerpassword = (password) => {
    this.setState({
      password: password
    })
  }
  handlerconfirmpassword = (confirm_password) => {
    this.setState({
      confirm_password: confirm_password
    })
  }
  confirmPasswordValidation = () => {
    if (this.state.password != this.state.confirm_password) {
      alert('Passwords are not same')
    }
  }
  handlerButton = async () => {
    if (this.state.email == '' || this.state.password == '' || this.state.confirm_password == '') {
      alert('Fields are Empty, Cannot Add List')
    }
    else {
      try {
        const response = await fetch('http://192.168.18.102:3000/register/', {
          method: 'post',
          body: JSON.stringify({
            email: this.state.email,
            password: this.state.password
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8"
          }
        }).then(response => {
          if (response.status == '200') {
            response.json().then(token =>{ alert('Your Token ' + token['token'])

            try {
              AsyncStorage.setItem('@storage_Key',token['token'])
            } catch (e) {
              console.error(e)
            }
          });
        }
        this.props.navigation.navigate('TODO')
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
          <Input onChangeText={this.handleremail} iconname='md-mail' icontype='ionicon' backgroundColor='white' height={45} borderBottomWidth={1} borderBottomColor='blue' placeholder='Email' paddingTop={10} paddingLeft={7}
            blurOnSubmit={false} onSubmitEditing={() => this.secondTextInput.focus()} InputRef={ref => (this.firstTextInput = ref)}></Input>
          <Input onChangeText={this.handlerpassword} iconname='ios-key' icontype='ionicon' backgroundColor='white' height={45} borderBottomWidth={1} borderBottomColor='blue' placeholder='Password' paddingLeft={10} secureTextEntry={false}
            blurOnSubmit={false} onSubmitEditing={() => this.thirdTextInput.focus()} InputRef={ref => (this.secondTextInput = ref)} iconid='password' iconname2='md-eye' icontype2='ionicon'></Input>
          <Input onChangeText={this.handlerconfirmpassword} iconname='ios-key' icontype='ionicon' backgroundColor='white' height={45} borderBottomWidth={1} borderBottomColor='blue' placeholder='Confirm Password' paddingLeft={10} secureTextEntry={false}
            blurOnSubmit={true} onSubmitEditing={this.confirmPasswordValidation} InputRef={ref => (this.thirdTextInput = ref)} iconid='confirm_password' iconname2='md-eye' icontype2='ionicon'></Input>

          <CustomBtn OnPress={this.handlerButton} viewMarginTop={20} viewMarginRight={40} viewMarginLeft={30} viewElevation={50} backgroundColor='#02A266' alignItems='center' marginHorizontal={10} height={50} marginRight={20} justifyContent='center' borderRadius={5}>
            <Text>Sign Up</Text>
          </CustomBtn>
        </View>
      </View>
    )
  }
}