import React from 'react';
import { Text, View, Button} from 'react-native';
import TaskBtn from '../mainComponents/taskBtn';
import { createAppContainer, NavigationEvents } from 'react-navigation';
import LabelInput from '../mainComponents/detailInput';
import PushNotification from 'react-native-push-notification'
export default class AddTodo extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: '',
        note: '',
        latitude: '',
        longitude: '',
      }
    }
    initialState() {
      return {
        focusDescriptionInput: false,
      };
    }
    handleName = (name) => {
      this.setState({
        name: name,
      })
    }
    handleNote = (note) => {
      this.setState({
        note: note,
      });
    }
    handleLatitude = (latitude) => {
      this.setState({
        latitude: String(latitude),
      });
    }
    handleLongitude = (longitude) => {
      this.setState({
        longitude: String(longitude),
      });
    }
    addData = async () => {
      if (this.state.note == '' || this.state.name == '' || this.state.latitude == '' || this.state.longitude == '') {
        alert('Fields are Empty, Cannot Add List')
      }
      else {
        try {
          const response = await fetch('https://meanstacktodo1.herokuapp.com/list/', {
            method: 'post',
            body: JSON.stringify({
              note: this.state.note,
              name: this.state.name,
              latitude: this.state.latitude,
              longitude: this.state.longitude
            }),
            headers: {
              "Content-type": "application/json; charset=UTF-8"
            }
          })
          if (response.status == '200') {
            PushNotification.localNotification({ color: "blue", vibrate: true, priority: 'high', title: 'Task Added', message: 'Task has been added', playSound: true })
            this.props.navigation.navigate('TODO')
          }
        }
        catch (error) {
          console.error(error)
        }
      }
    }
    render() {
      return (
        <View style={{ flex: 1, padding: 20, backgroundColor: 'white' }}>
          {/* <Card> */}
            <LabelInput onChangeText={this.handleName} height={40} returnKeyType='next' onSubmitEditing={() => this.secondTextInput.focus()} InputRef={ref => (this.firstTextInput = ref)}>Name</LabelInput>
            <LabelInput onChangeText={this.handleLatitude} keyboardType='numeric' returnKeyType='next' height={40} onSubmitEditing={() => this.thirdTextInput.focus()} InputRef={ref => (this.secondTextInput = ref)}>Latitude</LabelInput>
            <LabelInput onChangeText={this.handleLongitude} keyboardType='numeric' returnKeyType='next' height={40} onSubmitEditing={() => this.fourthTextInput.focus()} InputRef={ref => (this.thirdTextInput = ref)} >Longitude</LabelInput>
            <LabelInput onChangeText={this.handleNote} multiline={true} numberOfLines={4} height={60} InputRef={ref => (this.fourthTextInput = ref)}>Note</LabelInput>
            <View style={{
              flexDirection: 'row', justifyContent: 'center'
            }}>
              <TaskBtn backgroundColor='green' borderRadius={5} height={25} width={70} alignItems='center' marginRight={10} marginBottom={5}
                onPress={() => this.addData()} textColor='white'>
                <Text>Add</Text></TaskBtn>
              <TaskBtn backgroundColor='#e5e619' borderRadius={5} height={25} width={70} alignItems='center' marginRight={10} marginBottom={5}
                onPress={() => this.props.navigation.goBack()} textColor='white'>
                <Text>Cancel</Text>
              </TaskBtn>
            </View>
          {/* </Card> */}
        </View>
      )
    }
  
  }