import React from 'react';
import { Text, View, Dimensions, Image } from 'react-native';
import { Icon, Card, Divider } from 'react-native-elements';
import Chart from '../mainComponents/linechar'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { LineChart, XAxis, Grid } from 'react-native-svg-charts';
import CalenderButtons from '../mainComponents/calenderButton';
export default class ClientScreen3 extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const data = [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80]
        return (
            <View style={{ backgroundColor: 'white' }}>
                <View style={{ flexDirection: 'row', marginVertical: 20 }}>
                    <Image source={require('../mainComponents/image/video2.png')} style={{ height: 70, width: 70, marginHorizontal: 30, marginVertical:10 }} />
                    <View style={{ flexDirection: 'column', marginVertical: 20, marginHorizontal: -10 }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 20 }}>STQOEY    (STQ)</Text>
                        <View style={{ flexDirection: 'row', marginVertical: 10 }}>
                            <Text style={{ paddingRight: 20, fontWeight: 'bold' }}>$ 14.78</Text>
                            <Icon
                                name='caretup'
                                color='#6EDC85'
                                type='antdesign'
                                size={20}
                                style={{ marginLeft: 10 }}
                            />
                        </View>
                    </View>
                </View>
                <View style={{ backgroundColor: '#F9F9F9' }}>
                    <View style={{ flexDirection: 'column' }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                            <Text style={{ fontSize: 30, color:'#9696A1' }}>$0.44</Text>
                            <View style={{ marginLeft: 10, marginVertical: 20 }}>
                                <Icon
                                    name='caretup'
                                    color='gray'
                                    type='antdesign'
                                    size={10}
                                />
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'center', marginVertical:-10 }}>
                            <Text style={{ fontSize: 12,color:'#9696A1' }}>11.17% Week Change</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginVertical: 20 }}>
                        <CalenderButtons backgroundColor='white' CalenderButtonsText='Day'></CalenderButtons>
                        <TouchableOpacity style={{
                            paddingRight: 10,
                            paddingLeft: 10,
                            paddingTop: 2,
                            paddingBottom: 2,
                            borderWidth: 1,
                            borderColor: '#EFEEF1',
                            backgroundColor: '#1F7DE7',
                            elevation: 2,
                            borderRadius: 20,
                        }}><Text style={{ color: 'white', fontSize: 15 }}>Week</Text>
                        </TouchableOpacity>
                        <CalenderButtons backgroundColor='white' CalenderButtonsText='Month'></CalenderButtons>
                        <CalenderButtons backgroundColor='white' CalenderButtonsText='Year'></CalenderButtons>
                        <CalenderButtons backgroundColor='white' CalenderButtonsText='5 Year'></CalenderButtons>
                    </View>
                    <LineChart
                        style={{ height: 200 }}
                        data={data}
                        svg={{ stroke: 'rgb(63,136,233)' }}
                        contentInset={{ top: 20, bottom: 20, left: 20, right: 20 }}
                        animate={true}
                    >
                        <Grid />
                    </LineChart>
                    <XAxis
                        style={{ marginHorizontal: -10 }}
                        data={data}
                        // formatLabel={(value, index) => index}
                        contentInset={{ left: 20, right: 20 }}
                        svg={{ fontSize: 10, fill: 'black' }}
                    />
                </View>
                <View style={{
                    flexDirection: 'row',
                    marginLeft: 10,
                    marginRight: 10,
                    marginTop: 50,
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
                            paddingLeft: 30,
                            paddingRight: 30,
                            paddingBottom: 20,
                            paddingTop: 20,
                            backgroundColor: 'black',
                            elevation: 15,
                            borderRadius: 5,
                        }} onPress={()=> this.props.navigation.navigate('Client4')}
                        ><Text style={{ color: 'white', fontWeight: 'bold' }}>BUY</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity style={{
                            marginTop: 10,
                            marginLeft: 40,
                            marginBottom: 10,
                            paddingLeft: 30,
                            paddingRight: 30,
                            paddingBottom: 20,
                            paddingTop: 20,
                            backgroundColor: 'black',
                            elevation: 15,
                            borderRadius: 5,
                        }}><Text style={{ color: 'white', fontWeight: 'bold' }}>SELL</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}