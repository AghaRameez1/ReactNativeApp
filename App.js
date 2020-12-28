import React from 'react';

import {createAppContainer} from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack';

import TaskScreen from './Screens/TaskScreen';
import HomeScreen from './Screens/HomeScreen';
import LoginScreen from './Screens/LoginScreen';
import TODOScreen from './Screens/TODOScreen';
import TODODetails from './Screens/TODODetails';
import AddTodo from './Screens/AddTodo';
import GoogleMaps from './Screens/GoogleMaps';
import RegisterScreen from './Screens/registerScreen';
import ReadMessageScreen from './Screens/ReadingMessage';
import ClientScreen from './Screens/ClientScreen1';
import ClientScreen2 from './Screens/ClientScreen2';
import ClientScreen3 from './Screens/ClientScreen3';
import ClientScreen4 from './Screens/ClientScreen4';
import CalculatorScreen from './Screens/CalculatorScreen';
import BestGameEver from './Screens/GameScreen';


export default class App extends React.Component {
  render() {
    return <AppContainer />
  }
}

const MainNavigator = createStackNavigator({
  Task: TaskScreen ,
  Home: HomeScreen,
  Login: LoginScreen,
  TODO: TODOScreen,
  TODODETAILS: TODODetails,
  AddTODO: AddTodo,
  GoogleMap: GoogleMaps,
  Register: RegisterScreen,
  ReadMessage: ReadMessageScreen,
  Client: ClientScreen, 
  Client2: ClientScreen2,
  Client3: ClientScreen3,
  Client4: ClientScreen4,
  Calculator: {
    screen: CalculatorScreen,
    navigationOptions: {
      title: 'Calculator',
      headerShown: false
    },
  },
  Game: {
    screen: BestGameEver,
    navigationOptions: {
      title: 'Game',
      headerShown: false
    },
  },
}, {
  initialRouteName: 'Home',
  header:'none'
});

const AppContainer = createAppContainer(MainNavigator);