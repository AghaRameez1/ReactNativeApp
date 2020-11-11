import React,{Component} from 'react';
import {View, Text} from 'react-native';
export default class Score extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <View>
                <Text style={{color:'white'}}>Score:{this.props.value} </Text>
            </View>
            )
    }
}