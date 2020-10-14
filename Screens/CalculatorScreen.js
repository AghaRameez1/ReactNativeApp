import React from 'react';
import { Text, View, Button,StyleSheet} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import CalCirculatorButton from '../mainComponents/CalCirculatorButton'


export default class CalculatorScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      currentValue: "0",
      operator: null,
      previousValue: null
    }
    
  }
  
  handleInput = (value)=>{
    if (this.state.currentValue == '0'){
      this.setState({currentValue: `${value}`})
    }
    else{
      this.setState({currentValue: `${this.state.currentValue}${value}`})
    }
  }
  handleOperator = (operator)=>{
    this.setState({
      previousValue: this.state.currentValue,
      operator: operator,
      currentValue:'0'
    })

  }
  handleEqual = ()=>{
    const {currentValue, previousValue, operator} = this.state
    const current = parseFloat(currentValue)
    const previous = parseFloat(previousValue)
    if (operator === "/") {
      this.setState({
        currentValue: previous / current,
      
      });
    }
  
    if (operator === "x") {
      this.setState({
        currentValue: previous * current,
      
      });
    }
  
    if (operator === "+") {
      this.setState({
        currentValue: previous + current,
      
      });
    }
  
    if (operator === "-") {
      this.setState({
        currentValue: previous - current,
      
      });
    }
  }
  handlePercentage =()=>{
    this.setState({
      currentValue: `${parseFloat(this.state.currentValue)*.01}`
    })
  }
  handleposneg =()=>{
  this.setState({
    currentValue: `${parseFloat(this.state.currentValue)* -1}`
  })
  }
    render() {
      return (
        <View style={{flex:1,backgroundColor:'black'}}>
            <View style={styles.calView}>
            <TextInput caretHidden={true} keyboardType={null} color={'white'} showSoftInputOnFocus={false} placeholder='0' placeholderTextColor='white'
            style={styles.calInput} value={(this.state.currentValue).toString()}></TextInput>
            </View>
            <View style={{justifyContent:'space-evenly', flexDirection:'row'}}>
                {this.state.currentValue !='0'? <CalCirculatorButton backgroundColor='#a6a6a6' CalenderButtonsText={'C'} textColor={'black'} onPress={()=>this.setState({currentValue:0})}></CalCirculatorButton>: <CalCirculatorButton backgroundColor='#a6a6a6' CalenderButtonsText={'AC'} textColor={'black'} onPress={()=>this.setState({currentValue:0})}></CalCirculatorButton>}
                <CalCirculatorButton paddingRight={15} paddingLeft={15} backgroundColor='#a6a6a6' CalenderButtonsText={'+/-'} textColor={'black'} onPress={()=>this.handleposneg()}></CalCirculatorButton>
                <CalCirculatorButton backgroundColor='#a6a6a6' CalenderButtonsText={' % '} textColor={'black'} onPress={(()=>this.handlePercentage())}></CalCirculatorButton>
                <CalCirculatorButton backgroundColor='#f09a35' CalenderButtonsText={' / '} textColor={'white'} onPress={(()=>this.handleOperator('/'))}></CalCirculatorButton>
            </View>
            <View style={{justifyContent:'space-evenly', flexDirection:'row'}}>
                <CalCirculatorButton backgroundColor='#333333' CalenderButtonsText={' 7 '} textColor={'white'} onPress={()=>this.handleInput('7')}></CalCirculatorButton>
                <CalCirculatorButton backgroundColor='#333333' CalenderButtonsText={' 8 '} textColor={'white'} onPress={()=>this.handleInput('8')}></CalCirculatorButton>
                <CalCirculatorButton backgroundColor='#333333' CalenderButtonsText={' 9 '} textColor={'white'} onPress={()=>this.handleInput('9')}></CalCirculatorButton>
                <CalCirculatorButton backgroundColor='#f09a35' CalenderButtonsText=' &times; ' textColor={'white'} onPress={(()=>this.handleOperator('x'))}></CalCirculatorButton>
            </View>
            <View style={{justifyContent:'space-evenly', flexDirection:'row'}}>
                <CalCirculatorButton backgroundColor='#333333' CalenderButtonsText={' 4 '} textColor={'white'} onPress={()=>this.handleInput('4')}></CalCirculatorButton>
                <CalCirculatorButton backgroundColor='#333333' CalenderButtonsText={' 5 '} textColor={'white'} onPress={()=>this.handleInput('5')}></CalCirculatorButton>
                <CalCirculatorButton backgroundColor='#333333' CalenderButtonsText={' 6 '} textColor={'white'} onPress={()=>this.handleInput('6')}></CalCirculatorButton>
                <CalCirculatorButton backgroundColor='#f09a35' CalenderButtonsText=' &#8722; ' textColor={'white'} onPress={(()=>this.handleOperator('-'))}></CalCirculatorButton>
            </View>
            <View style={{justifyContent:'space-evenly', flexDirection:'row'}}>
                <CalCirculatorButton backgroundColor='#333333' CalenderButtonsText={' 1 '} textColor={'white'} onPress={()=>this.handleInput('1')}></CalCirculatorButton>
                <CalCirculatorButton backgroundColor='#333333' CalenderButtonsText={' 2 '} textColor={'white'} onPress={()=>this.handleInput('2')}></CalCirculatorButton>
                <CalCirculatorButton backgroundColor='#333333' CalenderButtonsText={' 3 '} textColor={'white'} onPress={()=>this.handleInput('3')}></CalCirculatorButton>
                <CalCirculatorButton backgroundColor='#f09a35' CalenderButtonsText={' + '}textColor={'white'} onPress={(()=>this.handleOperator('+'))}></CalCirculatorButton>
            </View>
            <View style={{justifyContent:'space-evenly', flexDirection:'row'}}>
                <CalCirculatorButton paddingRight={75} paddingLeft={75} backgroundColor='#333333' CalenderButtonsText={'0'} textColor={'white'} onPress={()=>this.handleInput('0')}></CalCirculatorButton>
                <CalCirculatorButton backgroundColor='#333333' CalenderButtonsText={' . '} textColor={'white'} onPress={()=>this.handleInput('.')}></CalCirculatorButton>
                <CalCirculatorButton backgroundColor='#f09a35' CalenderButtonsText={' = '} textColor={'white'} onPress={()=>this.handleEqual()}></CalCirculatorButton>
            </View>
         </View>
      )
    }
  }
  const styles = StyleSheet.create({
    calView:{
        paddingLeft:10,
        paddingRight:10,
        paddingTop:0,
        flex:1,
    },
    calInput:{
        textAlign:'right',
        // borderWidth:2,
        // borderColor:'black',
        height:250,
        fontSize:50,
        
    }
  });