import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { Icon } from 'react-native-elements';

const CircularBtn = props => {
    return (

        <TouchableOpacity style={{
            position: props.position,
            width: props.width,
            height: props.height,
            alignItems: props.alignItems,
            justifyContent: props.justifyContent,
            right: props.right,
            bottom: props.bottom,
            backgroundColor: props.backgroundColor,
            borderRadius: props.borderRadius,
            elevation: props.elevation
        }}
            onPress={props.onPress}
        >
            <Icon
                name={props.icon}
                type={props.icontype}
                color={props.iconcolor}></Icon>
        </TouchableOpacity>
    )
}

export default CircularBtn;