import React,{Component} from 'react';
import {View} from 'react-native';
import Contant from './Constants';
export default class Tail extends Component{
    constructor(props){
        super(props)
    }
    render(){
        let tailList = this.props.elements.map((el,idx) => {
            return <View key={idx} style={{width: this.props.size, height: this.props.size, backgroundColor:'#888888', position:'absolute',left:el[0]*this.props.size, top:el[1]*this.props.size}}/>
        })
        return(
            <View style={{width: Contant.GRID_SIZE * this.props.size, height:Contant.GRID_SIZE * this.props.size}}>
                {tailList}
            </View>
            )
    }
}