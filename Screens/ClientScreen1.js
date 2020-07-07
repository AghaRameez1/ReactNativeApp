import React from 'react';
import { Text, View, Image } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome5"
import { TouchableOpacity, TouchableHighlight } from 'react-native-gesture-handler';
import Details from '../mainComponents/ClientScreen1';
export default class ClientScreen1 extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <Text style={{ textAlign: 'center', fontSize: 30, fontWeight: 'bold' }}> Pat Muhi</Text>
                <View style={{
                    marginLeft: 70,
                    marginRight: 70,
                    flexDirection: 'row',
                    alignItems: 'flex-start',
                    marginTop: 10,
                    borderStyle: 'solid',
                    borderColor: 'black',
                    borderWidth: 0.5,
                    justifyContent: 'space-around'
                }}>
                    <Icon
                        name='dollar-sign'
                        color='black'
                        size={30}
                        style={{ alignItems: 'flex-start', marginTop: 10, fontWeight: 'bold' }}
                    />
                    <Text style={{ marginTop: 9, textAlign: 'left', fontSize: 25, fontWeight: 'bold', marginBottom: 10 }}>1,000</Text>
                    <TouchableHighlight style={{
                        marginTop: 13,
                        marginLeft: 30,
                        padding: 5,
                        backgroundColor: '#20b072',
                        elevation: 15,
                        borderRadius: 5
                    }}><Text style={{ fontWeight: 'bold' }}>+6.51%</Text>
                    </TouchableHighlight>
                </View>
                <View style={{
                    flexDirection: 'column',
                    alignItems: 'center',
                    marginTop: 15,
                }}>
                    <Image source={require('../mainComponents/image/sampleimage.jpeg')} style={{ borderWidth: 2, borderColor: '#b5b1b0', borderRadius: 100, height: 100, width: 100 }} />
                </View>
                <View style={{
                    flexDirection: 'row',
                    marginLeft: 10,
                    marginRight: 10,
                    marginTop: 10,
                    borderStyle: 'solid',
                    borderColor: 'black',
                    borderWidth: 0.5,
                    // backgroundColor: 'red',
                    justifyContent: 'space-around'
                }}>
                    <View>
                        <TouchableOpacity style={{
                            marginTop: 10,
                            marginBottom: 10,
                            paddingLeft: 20,
                            paddingRight: 20,
                            paddingBottom: 10,
                            paddingTop: 10,
                            backgroundColor: 'black',
                            elevation: 15,
                            borderRadius: 5,
                        }} onPress={() => this.props.navigation.push('Client2')}
                        ><Text style={{ color: 'yellow', fontWeight: 'bold' }}>Upload Funds</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity style={{
                            marginTop: 10,
                            marginLeft: 40,
                            marginBottom: 10,
                            paddingLeft: 20,
                            paddingRight: 20,
                            paddingBottom: 10,
                            paddingTop: 10,
                            backgroundColor: 'black',
                            elevation: 15,
                            borderRadius: 5,
                        }}><Text style={{ color: 'yellow', fontWeight: 'bold' }}>Withdraw Funds</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    paddingLeft: 10,
                    marginTop: 15,
                }}>
                    <Text style={{ fontWeight: 'bold' }}>Uploads</Text>
                </View>
                <Details TouBackgroundColor={'#e31225'} IconName={'dollar-sign'} IconSize={25} Text={'1,000'} Text2={'Pending'} TextDate={'02/05/2020'} 
                TextPaddingLeft={10} TextPaddingRight={10} />

                <View style={{
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    paddingLeft: 10,
                    marginTop: 15,
                }}>
                    <Text style={{ fontWeight: 'bold' }}>Withdraws</Text>
                </View>
                <Details TouBackgroundColor={'#12e688'} IconName={'dollar-sign'} IconSize={25} Text={100} Text2={'Done'} TextDate={'02/05/2020'}
                TextPaddingLeft={20} TextPaddingRight={20} />
                <View style={{
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    paddingLeft: 10,
                    marginTop: 15,
                }}>
                </View>
                <Details TouBackgroundColor={'#12e688'} IconName={'dollar-sign'} IconSize={25} Text={50} Text2={'Done'} TextDate={'02/05/2020'}
                TextPaddingLeft={20} TextPaddingRight={20} />

            </View >
        )
    }
}