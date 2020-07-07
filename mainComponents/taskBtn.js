import React from 'react';
import { View, TouchableHighlight, TouchableOpacity, Text, ShadowPropTypesIOS } from 'react-native';

const TaskBtn = props => {
    return (
        
            <TouchableOpacity style={{
                backgroundColor: props.backgroundColor,
                alignItems: props.alignItems,
                height: props.height,
                width: props.width,
                elevation: 15, // Android
                justifyContent: props.justifyContent,
                borderRadius: props.borderRadius,
                marginRight:props.marginRight,
                marginleft: props.marginleft,
                marginBottom: props.marginBottom
            }}
            onPress={props.onPress}
            >
                <Text style={{
                    marginTop:2,
                    color:props.textColor
                }}>{props.children}</Text>
            </TouchableOpacity>
    )
}

export default TaskBtn;