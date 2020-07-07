import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Text } from 'react-native';

const CalenderButtons = props => {
    return (
        <TouchableOpacity style={{
            paddingRight: 10,
            paddingLeft: 10,
            paddingTop: 2,
            paddingBottom: 2,
            borderWidth:1,
            borderColor: '#EFEEF1',
            backgroundColor: props.backgroundColor,
            // elevation: 2,
            borderRadius: 20,
        }}><Text style={{ color: '#3F88E9', fontSize: 15 }}>{props.CalenderButtonsText}</Text>
        </TouchableOpacity>
    )
}

export default CalenderButtons;