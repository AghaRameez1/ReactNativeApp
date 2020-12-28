import React from 'react';
import { Text, View, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import auth from '@react-native-firebase/auth';
import CustomBtn from '../mainComponents/userBtn';
import Input from '../mainComponents/input';
export default class RegisterScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      confirm_password: '',
      login: false,
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
    else {
      this.handlerButton()
    }
  }
  handlerButton = async () => {
    if (this.state.email == '' || this.state.password == '' || this.state.confirm_password == '') {
      alert('Fields are Empty, Cannot Register User')
    }
    else {
      this.setState({ login: true })
      try {
        // const response = await fetch('https://meanstacktodo1.herokuapp.com/register/', {
        //   method: 'post',
        //   body: JSON.stringify({
        //     email: this.state.email,
        //     password: this.state.password
        //   }),
        //   headers: {
        //     "Content-type": "application/json; charset=UTF-8"
        //   }
        // }).then(response => {
        //   if (response.status == '200') {
        //     response.json().then(token =>{ alert('Your Token ' + token['token'])
        //     this.setState({login: false})
        //     try {
        //       AsyncStorage.setItem('@storage_Key',token['token'])

        //     } catch (e) {
        //       console.error(e)
        //     }
        //   });
        // }
        // this.props.navigation.navigate('TODO')
        // });

        //------------------------------------------------_FIREBASE_------------------------------------------------//
        auth()
          .createUserWithEmailAndPassword(this.state.email, this.state.password)
          .then(result => {
            try {
              AsyncStorage.setItem('@storage_Key', result.user.uid)

            } catch (e) {
              console.error(e)
            }
            this.setState({ login: false })
            this.props.navigation.navigate('TODO')
          })
          .catch(error => {
            if (error.code === 'auth/email-already-in-use') {
              console.log('That email address is already in use!');
            }

            if (error.code === 'auth/invalid-email') {
              console.log('That email address is invalid!');
            }

            alert(error);
            this.setState({ login: false })
          });
      }
      catch (error) {
        console.error(error)
      }
    }
  }
  render() {
    return (
      <View style={{ flex: 1, paddingTop: 20, paddingLeft: 10, paddingRight: 10, backgroundColor: 'red' }} >
        <View style={{ flex: .5, borderRadius: 20, backgroundColor: '#d9d9d9' }}>
          <Input onChangeText={this.handleremail} iconname='md-mail' icontype='ionicon' backgroundColor='white' height={45} borderBottomWidth={1} borderBottomColor='blue' placeholder='Email' paddingTop={10} paddingLeft={7}
            blurOnSubmit={false} onSubmitEditing={() => this.secondTextInput.focus()} InputRef={ref => (this.firstTextInput = ref)}></Input>
          <Input onChangeText={this.handlerpassword} iconname='ios-key' icontype='ionicon' backgroundColor='white' height={45} borderBottomWidth={1} borderBottomColor='blue' placeholder='Password' paddingLeft={10} secureTextEntry={false}
            blurOnSubmit={false} onSubmitEditing={() => this.thirdTextInput.focus()} InputRef={ref => (this.secondTextInput = ref)} iconid='password' iconname2='md-eye' icontype2='ionicon'></Input>
          <Input onChangeText={this.handlerconfirmpassword} iconname='ios-key' icontype='ionicon' backgroundColor='white' height={45} borderBottomWidth={1} borderBottomColor='blue' placeholder='Confirm Password' paddingLeft={10} secureTextEntry={false}
            blurOnSubmit={true} onSubmitEditing={this.confirmPasswordValidation} InputRef={ref => (this.thirdTextInput = ref)} iconid='confirm_password' iconname2='md-eye' icontype2='ionicon'></Input>

          <CustomBtn OnPress={this.confirmPasswordValidation} viewMarginTop={20} viewMarginRight={40} viewMarginLeft={30} viewElevation={50} backgroundColor='#02A266' alignItems='center' marginHorizontal={10} height={50} marginRight={20} justifyContent='center' borderRadius={5} textColor='#FFFF'>
            {this.state.login == true ? <ActivityIndicator size="large" color="#FFFFFF" /> : <Text>Sign Up</Text>}
          </CustomBtn>
        </View>
      </View>
    )
  }
}