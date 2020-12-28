import React, { useState } from 'react';
import { View, TextInput, Text } from 'react-native';
import { Icon } from 'react-native-elements'

const SimpleInput = props => {
    return (
        <View style={{
            flexDirection: 'row',
            paddingTop: 10,
            marginTop: 10,
            marginLeft: 30,
            marginRight: 20,
        }}>
            <View style={{
                flex: .1,
                justifyContent: 'center',
                backgroundColor: 'white',
                borderBottomWidth: 1,
                borderBottomColor: '#D3D7DA',
                paddingLeft: 10,
                elevation: 3
            }}>
                <Icon
                    name={props.iconname}
                    type={props.icontype}
                    color='#979897'
                />
            </View>
            <View style={{
                flex: .9,
            }}>
                <TextInput
                    style={{
                        elevation: 2,
                        paddingTop: props.paddingTop,
                        paddingRight: props.paddingRight,
                        paddingBottom: props.paddingBottom,
                        paddingLeft: props.paddingLeft,
                        backgroundColor: props.backgroundColor,
                        height: props.height,
                        marginHorizontal: props.marginHorizontal,
                        marginVertical: props.marginVertical,
                        marginRight: props.marginRight,
                        borderBottomWidth: 1,
                        borderBottomColor: '#D3D7DA',
                    }}
                    autoCapitalize ={props.autoCapitalize}
                    blurOnSubmit={props.blurOnSubmit}
                    ref = {props.InputRef}
                    onSubmitEditing ={props.onSubmitEditing}
                    onChangeText = {props.onChangeText}
                    placeholder={props.placeholder}
                    placeholderTextColor='#979897'
                />
            </View>
            <View style={{
                elevation: 2,
                justifyContent: 'center',
                backgroundColor: 'white',
                marginRight: 20,
                paddingRight: 10,
                borderBottomWidth: 1,
                borderBottomColor: '#D3D7DA',
            }}>
            </View>
        </View>
    )
}

export default SimpleInput;