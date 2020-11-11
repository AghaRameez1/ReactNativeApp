import React,{Component} from 'react';
import {View, Text} from 'react-native';
export default class HighScore extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <View>
                <Text style={{color:'white'}}>HIGHSCORE:{this.props.highvalue} </Text>
            </View>
            )
    }
}