import React from 'react';
import { Text, View, Dimensions, Image } from 'react-native';
import { Icon, Card, Divider } from 'react-native-elements';
import Chart from '../mainComponents/linechar'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
export default class ClientScreen2 extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <ScrollView>
                <View style={{ flex: 1, backgroundColor: 'white' }}>
                    <View style={{ borderWidth: 1, borderColor: 'black', borderRadius: 5, paddingBottom: 10, marginLeft: 5, marginRight: 5 }}>
                        <View style={{ position: 'absolute' }}>
                            <View style={{ flexDirection: 'row', marginTop: 10, marginLeft: 10 }}>
                                <Text style={{ color: 'green', fontSize: 20 }}>8,663.58</Text>
                                <View style={{ marginTop: 5 }}>
                                    <Icon
                                        name='arrow-long-up'
                                        type='entypo'
                                        color='green'
                                        size={18}
                                    ></Icon>
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', marginTop: 5, marginLeft: 10 }}>
                                <Text style={{ color: 'green', fontSize: 10 }}>$ 8,663.58</Text>
                                <View style={{ flexDirection: 'row', marginLeft: 20 }}>
                                    <Text style={{ color: 'green', fontSize: 10 }}>+1.05%</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row-reverse', }}>
                            <View style={{ flexDirection: 'row-reverse', justifyContent: 'flex-end', marginTop: 5, marginLeft: 10 }}>
                                <Text style={{ paddingTop: 5, fontSize: 10, fontWeight: 'bold' }}>370,916,159.50</Text>
                                <View style={{ marginTop: 5 }}>
                                    <Text style={{ fontSize: 10, color: '#7F7F7F', marginLeft: 5 }}>Vol</Text>
                                    <Text style={{ fontSize: 10, color: '#7F7F7F', }}>High</Text>
                                    <Text style={{ marginLeft: 5, fontSize: 10, color: '#7F7F7F' }}>Low</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={{ borderWidth: 1, borderColor: 'black', borderRadius: 5, paddingBottom: 10, marginLeft: 5, marginRight: 5, marginTop: 5 }}>
                        <View style={{ position: 'absolute' }}>
                            <View style={{ flexDirection: 'row', marginTop: 10, marginLeft: 10 }}>
                                <Text style={{ fontSize: 25 }}>Performance</Text>
                            </View>
                            <View style={{ flexDirection: 'row', marginTop: 5, marginLeft: 10 }}>

                                <Text style={{ fontSize: 15 }}>Profit & Loss</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'flex-end', marginTop: 5, marginLeft: 10, marginRight: 10 }}>
                            <Text style={{ paddingTop: 5, color: 'green', fontWeight: 'bold', fontSize: 20 }}>0.58%</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'flex-end', marginTop: 5, marginLeft: 10, marginRight: 10 }}>
                            <Text style={{ paddingTop: 5, fontWeight: 'bold' }}>$6,044.77</Text>
                        </View>
                        <Chart></Chart>
                    </View>
                    <View style={{ margin: 3, backgroundColor: '#e4e3e9' }}>
                        <Card containerStyle={{ marginTop: 3 }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <View style={{ marginTop: 10, flexDirection: 'row' }}>
                                    <Image source={require('../mainComponents/image/cash.png')} />
                                    <Text style={{ marginVertical: 10 }}>Cash</Text>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ marginVertical: 20 }}>$940,769.00</Text>
                                    <View style={{ marginVertical: 18 }}>
                                        <Icon
                                            name='chevron-right'
                                            type='entypo'
                                            color='black'
                                            size={25}
                                            onPress={()=>this.props.navigation.push('Client3')}
                                        />
                                    </View>
                                </View>
                            </View>
                        </Card>
                        <Card containerStyle={{ marginTop: 3 }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <View style={{ marginTop: 10, flexDirection: 'row' }}>
                                    <Image source={require('../mainComponents/image/video.png')} />
                                    <View style={{ flexDirection: 'column' }}>
                                        <Text style={{ marginLeft: 2, marginVertical: 2 }}>Zoom Video</Text>
                                        <View style={{ flexDirection: 'row' }}>
                                            <Text style={{ fontSize: 10 }}>$125.78</Text>
                                            <View style={{ marginVertical: 5, marginLeft: 5, marginRight: 5 }}>
                                                <Icon
                                                    name='caretup'
                                                    color='green'
                                                    type='antdesign'
                                                    size={10}
                                                />
                                            </View>
                                            <Text style={{ fontSize: 10, color: 'gray' }}>14.32%</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={{ flexDirection: 'column' }}>
                                    <TouchableOpacity style={{
                                        marginTop: 5,
                                        padding: 3,
                                        backgroundColor: 'black',
                                        elevation: 15,
                                        borderRadius: 5
                                    }}><Text style={{ color: 'white', }}>0.00%</Text>
                                    </TouchableOpacity>
                                    <View>
                                        <Text style={{ color: 'gray', fontSize: 12, textAlign: 'right', paddingRight: 5 }}>$0.00</Text>
                                    </View>
                                </View>
                            </View>
                        </Card>
                        <Divider style={{ backgroundColor: '#e5e5ea', marginTop: 20, alignContent: 'center', borderWidth: 1, marginRight: 100, marginLeft: 100 }} />
                        <Card>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <View style={{ marginTop: 10, flexDirection: 'row' }}>
                                    <Image source={require('../mainComponents/image/yunjiadr.png')} />
                                    <View style={{ flexDirection: 'column' }}>
                                        <Text style={{ marginLeft: 2, marginVertical: 10 }}>Yunji ADR</Text>

                                    </View>
                                </View>
                                <View></View>
                                <View></View>
                                <View></View>
                                <View></View>
                                <View style={{ flexDirection: 'column', marginVertical: 10 }}>
                                    <Text>$125.78</Text>
                                    <Text style={{ color: 'gray' }}>14.32%</Text>
                                </View>
                                <View style={{ marginVertical: 20 }}>
                                    <Icon
                                        name='caretup'
                                        color='green'
                                        type='antdesign'
                                        size={20}
                                    />
                                </View>
                            </View>
                        </Card>
                        <Card containerStyle={{ marginTop: 3 }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <View style={{ marginTop: 10, flexDirection: 'row' }}>
                                    <Image source={require('../mainComponents/image/maxar.png')} />
                                    <View style={{ flexDirection: 'column' }}>
                                        <Text style={{ marginLeft: 2, marginVertical: 10 }}>Maxar Technologies</Text>

                                    </View>
                                </View>
                                <View></View>
                                <View></View>
                                <View></View>
                                <View></View>
                                <View style={{ flexDirection: 'column', marginVertical: 10 }}>
                                    <Text>$15.50</Text>
                                    <Text style={{ color: 'gray' }}>-11.63%</Text>
                                </View>
                                <View style={{ marginVertical: 20 }}>
                                    <Icon
                                        name='caretdown'
                                        color='red'
                                        type='antdesign'
                                        size={20}
                                    />
                                </View>
                            </View>
                        </Card>
                    </View>
                </View>
            </ScrollView>
        )
    }
}