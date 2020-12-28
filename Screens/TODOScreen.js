import React from 'react';
import { Text, View, Button, ActivityIndicator, StyleSheet, RefreshControl, Alert } from 'react-native';
import { createAppContainer, NavigationEvents } from 'react-navigation';
import CircularBtn from '../mainComponents/circularButton';
import TaskBtn from '../mainComponents/taskBtn';
import PushNotification from 'react-native-push-notification';
import { FlatList } from 'react-native-gesture-handler';
import { Card, CheckBox } from 'react-native-elements';
import AsyncStorage from '@react-native-community/async-storage';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
export default class TODOScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      refreshing: true,
      checked: [],
      dataSource: [],
    }
    this.getDatafromServer();
  }
  getDatafromServer = async () => {
    try {
      // const response = await fetch('https://meanstacktodo1.herokuapp.com/list');
      // const responseJson = await response.json();
      // this.setState({
      //   refreshing: false,
      //   dataSource: responseJson,
      // }, function () {
      //   let intialCheck = responseJson.map(responseJson => responseJson.completed);
      //   this.setState({ checked: intialCheck })
      // });
      // console.log(responseJson);
      //--------------------------------------------------_FIRESTORE---------------------------------------------------//
      // let obj ={}
      const data1 = await firestore().collection('_users_todo_info')
      data1.onSnapshot(data2 => {
        if (data2._docs.length == 0) {
          PushNotification.localNotification({ color: "blue", vibrate: true, priority: 'high', title: 'Data Received', message: 'No Data Available', playSound: true })
          this.setState({
            refreshing: false,
            dataSource: []
          });
        } else {
          data2.forEach(data3 => {
            let obj = { 'name': data3._data.name, 'note': data3._data.note, 'latitude': data3._data.latitude, 'longitude': data3._data.longitude, _id: data3._ref._documentPath._parts[1] }
            this.setState({
              refreshing: false,
              dataSource: [obj],
              checked: [data3._data.completed]
            });
          });
        }
      });
      // PushNotification.localNotification({ color: "red", vibrate: true, priority: 'high', title: 'Data Received', message: 'Data Retrieved from Server', playSound: true })
      //--------------------------------------------------_FIRESTORE---------------------------------------------------//

    }
    catch (error) {
      console.error(error);
    }
  };
  deleteDatafromServer = async (id) => {
    // try {
    //   const response = await fetch('https://meanstacktodo1.herokuapp.com/list/' + id, {
    //     method: 'delete'
    //   })
    //   if (response.status == '200') {
    //     const responseJson = await response.json();
    //     this.state.dataSource.splice(responseJson, 1)
    //     this.setState({ dataSource: this.state.dataSource })
    //     PushNotification.localNotification({ color: "red", vibrate: true, priority: 'high', title: 'Task deleted', message: 'Task has been deleted', playSound: true })
    //   }
    //   else {
    //     alert('Network Unavailable')
    //   }
    // }
    // catch (error) {
    //   console.error(error);
    // }
    try {
      const data1 = await firestore().collection('_users_todo_info').doc(id).delete();
      data1.onSnapshot(data2 => {
        this.state.dataSource.splice(data2._data, 1)
        this.setState({ dataSource: this.state.dataSource })
        PushNotification.localNotification({ color: "red", vibrate: true, priority: 'high', title: 'Task deleted', message: 'Task has been deleted', playSound: true })
      });
    }
    catch (error) {
      console.error(error);
    }
    //-------------------------------------------------------------FIRESTORE--------------------------------------------------------------//

  }
  onRefresh() {
    //Clear old data of the list
    this.setState({ dataSource: [] });
    //Call the Service to get the latest data
    this.getDatafromServer();
  }
  stateCompleted = async (index, item) => {
    try {
      let checked = [...this.state.checked];
      checked[index] = !checked[index];
      // const response = await fetch('https://meanstacktodo1.herokuapp.com/list/' + item._id, {
      //   method: 'put',
      //   body: JSON.stringify({
      //     completed: checked[index],
      //   }),
      //   headers: {
      //     "Content-type": "application/json; charset=UTF-8"
      //   }
      // }).then(response => response.json()
      // ).then(response => {
      //   if (response.data.completed == true) {

      //     PushNotification.localNotification({ vibrate: true, priority: 'high', title: 'Task Undone', message: 'Task Unchecked', playSound: true })
      //     this.setState({ checked });
      //   }
      //   else if (response.data.completed == false) {
      //     PushNotification.localNotification({ vibrate: true, priority: 'high', title: 'Task Done', message: 'Task Checked', playSound: true })
      //     this.setState({ checked });
      //   }

      // });
      //---------------------------------------------------------------FIRESTORE-----------------------------------------------------------------//
      const data1 = await firestore().collection('_users_todo_info').doc(item._id).update({
        completed: checked[index]
      });
      this.setState({ checked });
      if (checked[index] == true) {
        PushNotification.localNotification({ vibrate: true, priority: 'high', title: 'Task done', message: 'Task Checked', playSound: true })
      } else {
        PushNotification.localNotification({ vibrate: true, priority: 'high', title: 'Task not done', message: 'Task Unchecked', playSound: true })
      }
    }
    catch (error) {
      console.error(error);
    }
    //---------------------------------------------------------------FIRESTORE-----------------------------------------------------------------//

  }
  clearStorage = async () => {
    try {
      auth()
        .signOut().then(() => console.log('User signed out!'));
      await AsyncStorage.removeItem('@storage_Key')
      alert('Successfully cleared');
      this.props.navigation.navigate('Home')
    } catch (e) {
      console.error(e)
    }
  }
  render() {
    let { checked } = this.state;
    if (this.state.refreshing) {
      return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
          <ActivityIndicator color='black' />

        </View>
      )
    }
    return (

      <View style={styles.container}>
        <NavigationEvents
          onDidFocus={() => this.getDatafromServer()
          }
        />
        {this.state.dataSource.length == 0 ?
          <View style={{
            flex: 1,
            justifyContent: 'center'
          }}><Card style={{ elevation: 8 }}>
              <Text style={{ textAlign: 'center', fontSize: 40, color: 'red' }}>No TODO List</Text></Card></View> :
          <FlatList
            data={this.state.dataSource}
            renderItem={({ item, index }) => this.Item(item, index, checked)}
            extraData={this.state}
            keyExtractor={item => item._id}
            refreshControl={
              <RefreshControl
                //refresh control used for the Pull to Refresh
                refreshing={this.state.refreshing}
                onRefresh={this.onRefresh.bind(this)}
              />
            }
          />}
        <View style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'flex-end'
        }}>
          <CircularBtn position='absolute' elevation={8} alignItems='center' justifyContent='center' right={20} bottom={20} backgroundColor='#00acee' borderRadius={50} height={45} width={45} marginBottom={20} icon='feather' icontype='entypo' iconcolor='white'
            onPress={() => this.props.navigation.navigate('AddTODO')}></CircularBtn>
        </View>
        <Button title='Logout' onPress={this.clearStorage}></Button>
      </View>
    );
  }
  Item(item, index, checked) {
    return (
      <View style={{ flex: 1, paddingBottom: 10, marginBottom: 3 }}>
        <Card style={{ elevation: 8 }}>
          <Text style={styles.item}>{item.name}{'\n'}{item.note}</Text>
          <CheckBox id={index}
            title='Completed'
            checked={checked[index]}
            onPress={() => this.stateCompleted(index, item)}
          />
          <View style={{
            flex: 1,
            flexDirection: 'row', justifyContent: 'flex-end'
          }}>
            <TaskBtn backgroundColor='green' borderRadius={5} height={25} width={70} alignItems='center' marginRight={10} marginBottom={5}
              onPress={() => this.props.navigation.navigate('TODODETAILS', { ItemID: item._id })} textColor='white'>
              <Text>Edit</Text>
            </TaskBtn>
            <TaskBtn backgroundColor='red' borderRadius={5} height={25} width={70} alignItems='center' marginRight={10} marginBottom={5}
              onPress={() => this.deleteDatafromServer(item._id)} textColor='white'>
              <Text>Remove</Text>
            </TaskBtn>
          </View>
        </Card>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    alignSelf: 'center',
  }
});