import React from 'react';
import { View, TouchableHighlight, TouchableOpacity, Text } from 'react-native';

const CustomBtn = props => {
    return (
        <View style={{
            flexDirection: props.viewFlexDirection,
            justifyContent:props.viewJustifyContent,
            marginTop:props.viewMarginTop,
            marginRight:props.viewMarginRight,
            marginLeft:props.viewMarginLeft,
            elevation: props.viewElevation,
            height: props.viewHeight,
            width: props.viewWidth,
            alignContent: props.viewAlignContent,
        }}>
            <TouchableOpacity style={{
                backgroundColor: props.backgroundColor,
                alignItems: props.alignItems,
                height: props.height,
                elevation: 15, // Android
                justifyContent: props.justifyContent,  
                borderRadius: props.borderRadius,              
            }}
                onPress={props.OnPress}
            >
                <Text style={{
                    color: props.textColor,
                    
                }}>{props.children}</Text>
            </TouchableOpacity >
        </View>
    )
}

export default CustomBtn;