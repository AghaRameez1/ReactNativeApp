import React from 'react';
import { Text, View, ActivityIndicator, StyleSheet, RefreshControl} from 'react-native';
import TaskBtn from '../mainComponents/taskBtn';
import { FlatList } from 'react-native-gesture-handler';
import { Card, CheckBox } from 'react-native-elements';
import LabelInput from '../mainComponents/detailInput';
import Maps from '../mainComponents/googleMaps';
export default class TODODetails extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        isLoading: true,
        name: '',
        note: '',
        completedCheck: Boolean,
        latitude: Number,
        longitude: Number,
      }
      this.getDetailsfromServer();
    }
    getDetailsfromServer = async () => {
      try {
        const response = await fetch('http://192.168.18.102:3000/list/' + this.props.navigation.getParam('ItemID'));
        const responseJson = await response.json();
        this.setState({
          isLoading: false,
          dataSource: [responseJson],
        }, function () {
          this.setState({
            note: responseJson.note,
            name: responseJson.name,
            completedCheck: responseJson.completed,
            latitude: responseJson.latitude,
            longitude: responseJson.longitude
          })
        });
      }
      catch (error) {
        console.error(error);
      }
    }
    deleteDatafromServer = async (id) => {
      // console.log(id)
      try {
        const response = await fetch('http://192.168.18.102:3000/list/' + id, {
          method: 'delete'
        })
        const responseJson = await response.json();
        PushNotification.localNotification({ color: "red", vibrate: true, priority: 'high', title: 'Task deleted', message: 'Task has been deleted', playSound: true })
        this.props.navigation.navigate('TODO')
      }
      catch (error) {
        console.error(error);
      }
    }
    onRefresh() {
      //Clear old data of the list
      this.setState({ dataSource: [] });
      //Call the Service to get the latest data
      this.getDetailsfromServer();
    }
    handleName = (name) => {
      this.setState({
        name: name
      })
    }
    handleNote = (note) => {
      this.setState({
        note: note
      })
    }
    handleLatitude = (latitude) => {
      this.setState({
        latitude: latitude
      })
    }
    handleLongitude = (longitude) => {
      this.setState({
        longitude: longitude
      })
    }
    handleCheck = (check) => {
      this.setState({
        completedCheck: check
      })
    }
    sendingUpdatedData = async (item) => {
      try {
        const response = await fetch('http://192.168.18.102:3000/list/' + item._id, {
          method: 'put',
          body: JSON.stringify({
            _id: item._id,
            note: this.state.note,
            name: this.state.name,
            completed: this.state.completedCheck,
            latitude: this.state.latitude,
            longitude: this.state.longitude,
            __v: item.__v
  
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8"
          }
        })
        if (response.status == '200') {
          alert("Updated successfully")
          this.props.navigation.navigate('TODO')
        }
      }
      catch (error) {
        console.error(error)
      }
    }
    render() {
  
      if (this.state.isLoading) {
        return (
          <View style={{ flex: 1, padding: 20, backgroundColor: 'white' }}>
            <ActivityIndicator />
          </View>
        )
      }
  
      return (
        <View style={styles.container}>
          <FlatList
            data={this.state.dataSource}
            renderItem={({ item }) => this.Item(item)}
            keyExtractor={item => item._id}
            refreshControl={
              <RefreshControl
                //refresh control used for the Pull to Refresh
                refreshing={this.state.isLoading}
                onRefresh={this.onRefresh.bind(this)}
              />
            }
          />
        </View>
      )
    }
    Item(item) {
      return (
        <View>
          <View style={{ flex: 1, marginLeft: 20 }}>
            <Card style={{ elevation: 8 }}>
              <LabelInput name={item.name} height={40}
                onChangeText={this.handleName}>Name</LabelInput>
              <LabelInput name={item.note} height={40} multiline={true} numberOfLines={4}
                onChangeText={this.handleNote}>Note</LabelInput>
              <LabelInput name={String(item.latitude)} height={40}
                onChangeText={this.handleLatitude} keyboardType='numeric'>Latitude</LabelInput>
              <LabelInput name={String(item.longitude)} height={40}
                onChangeText={this.handleLongitude} keyboardType='numeric'>Longitude</LabelInput>
              <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignContent: 'center' }}>
                <Text style={{ alignSelf: 'center', textAlign: 'center' }}>Completed:</Text>
                <CheckBox
                  checked={this.state.completedCheck}
                  onPress={() => this.setState({ completedCheck: !this.state.completedCheck })}
                />
              </View>
              <View style={{
                flexDirection: 'row', justifyContent: 'center'
              }}>
                <TaskBtn backgroundColor='green' borderRadius={5} height={25} width={70} alignItems='center' marginRight={10} marginBottom={5}
                  onPress={() => this.sendingUpdatedData(item)} textColor='white'>
                  <Text>Update</Text>
                </TaskBtn>
                <TaskBtn backgroundColor='red' borderRadius={5} height={25} width={70} alignItems='center' marginRight={10} marginBottom={5}
                  onPress={() => this.deleteDatafromServer(item._id)} textColor='white'>
                  <Text>Remove</Text>
                </TaskBtn>
                <TaskBtn backgroundColor='#e5e619' borderRadius={5} height={25} width={70} alignItems='center' marginRight={10} marginBottom={5}
                  onPress={() => this.props.navigation.goBack()} textColor='white'>
                  <Text>Cancel</Text>
                </TaskBtn>
              </View>
            </Card>
          </View>
          <Maps latitude={item.latitude} longitude={item.longitude} name={item.name} note={item.note}></Maps>
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