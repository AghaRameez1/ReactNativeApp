import React from 'react';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { Text } from 'react-native';

const CalCirculatorButton = props => {
    return (
        <TouchableHighlight style={{
            paddingRight: props.paddingRight? props.paddingRight: 20,
            paddingLeft: props.paddingLeft? props.paddingLeft: 20,
            paddingTop: props.paddingTop? props.paddingTop: 15,
            paddingBottom: props.paddingBottom? props.paddingBottom: 15,
            marginBottom:10,
            backgroundColor: props.backgroundColor,
            elevation: 2,
            borderRadius: 35,
            
        }}
        underlayColor={'#b8b8b8'}
        onPress={props.onPress}
        ><Text style={{ color: props.textColor, fontSize: 15, marginRight:10, marginLeft:10, textAlign:'center' }}>{props.CalenderButtonsText}</Text>
        </TouchableHighlight>
    )
}

export default CalCirculatorButton;