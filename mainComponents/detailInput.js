import React from 'react';
import { TextInput, Text, View } from 'react-native';

const LabelInput = props => {
    return (
        <View>
            <Text style={{ textAlign: 'center' }} >{props.children}:</Text>
            <TextInput style={{
                margin: 15,
                height: props.height,
                borderColor: '#7a42f4',
                borderWidth: 1
            }}
            onChangeText = {props.onChangeText}
            ref = {props.InputRef}
            returnKeyType = { props.returnKeyType}
            blurOnSubmit={false}
            onSubmitEditing ={props.onSubmitEditing}
            multiline={props.multiline}
            numberOfLines={props.numberOfLines}
            keyboardType={props.keyboardType} 
            defaultValue={props.name}
            />
        </View>
    )
}

export default LabelInput;