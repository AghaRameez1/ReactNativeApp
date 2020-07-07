import React from 'react';
import { Text, View } from 'react-native';
import { TouchableOpacity, TouchableHighlight } from 'react-native-gesture-handler';
import Icon from "react-native-vector-icons/FontAwesome5"

const Details = props => {
    return (
        <View style={{
            marginLeft: 10,
            marginRight: 20,
            flexDirection: 'row',
            alignItems: 'flex-start',
            marginTop: 10,
            borderStyle: 'solid',
            borderColor: 'black',
            borderWidth: 0.5,
            justifyContent: 'space-around'
        }}><Icon
                name={props.IconName}
                color={props.IconColor}
                size={props.IconSize}
                style={{ marginTop: 10, textAlign: 'center', fontWeight: 'bold' }}
            />
            <Text style={{ marginTop: 8.5, textAlign: 'center', fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>{props.Text}</Text>
            <View style={{ alignItems: 'flex-end' }}>
                <TouchableOpacity style={{
                    marginTop: 10,
                    marginLeft: 175,
                    padding: 5,
                    backgroundColor: props.TouBackgroundColor,
                    elevation: 15,
                    borderRadius: 5
                }}><Text style={{ color: 'white', paddingLeft: props.TextPaddingLeft, paddingRight: props.TextPaddingRight }}>{props.Text2}</Text>
                </TouchableOpacity>
                <Text style={{ marginRight: 10, fontSize: 11 }}>{props.TextDate}</Text>
            </View>
        </View>

    )
}
export default Details;