import React from 'react';
import { Text, View, Image, Button } from 'react-native';
import { PieChart } from 'react-native-svg-charts'
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import Icon from "react-native-vector-icons/FontAwesome5"
import { Card } from 'react-native-elements';
import Chart from '../mainComponents/linechar';
export default class ClientScreen4 extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const data = [
            {
                key: 5,
                amount: 30,
                svg: { fill: '#1F7DE7' }
            },
            {
                key: 1,
                amount: 12,
                svg: { fill: '#2E2D4F' },
            },
            {
                key: 2,
                amount: 6,
                svg: { fill: '#9B99AB' }
            },


            {
                key: 3,
                amount: 6,
                svg: { fill: '#D95847' }
            },
            {
                key: 4,
                amount: 6,
                svg: { fill: '#EFBF63' }
            },

        ]


        return (
            <ScrollView>
                <View style={{ backgroundColor: 'white' }}>
                    <View style={{ flexDirection: 'column', borderWidth: 1, borderColor: '#E9E9E9', borderRadius: 5, marginHorizontal: 5, paddingBottom: 10 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View style={{ flexDirection: 'column', marginHorizontal: 10 }}>
                                <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Month Performace</Text>
                                <Text style={{ color: '#6B6B83' }}>IFL Ranke #762</Text>
                            </View>
                            <TouchableOpacity style={{
                                marginVertical: 10,
                                marginHorizontal: 10,
                                paddingTop: 1,
                                paddingBottom: 1,
                                paddingRight: 5,
                                paddingLeft: 5,
                                backgroundColor: '#48DC98',
                                borderRadius: 5
                            }}><Text style={{ color: 'white', fontSize: 20 }}>+6.03%</Text>
                            </TouchableOpacity>
                        </View>
                        <PieChart
                            style={{ height: 200 }}
                            valueAccessor={({ item }) => item.amount}
                            data={data}
                            outerRadius={'75%'}
                        />
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <View style={{ flexDirection: 'column' }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <TouchableOpacity style={{
                                        marginVertical: 5,
                                        marginHorizontal: 9,
                                        paddingTop: 5,
                                        paddingBottom: 5,
                                        paddingRight: 5,
                                        paddingLeft: 5,
                                        backgroundColor: '#1F7DE7',
                                        borderRadius: 5
                                    }}>
                                    </TouchableOpacity>
                                    <Text style={{ fontWeight: 'bold', fontSize: 12 }}>49.16%</Text>
                                </View>
                                <Image source={require('../mainComponents/image/commodities.png')} style={{ alignSelf: 'center' }} />
                                <Text style={{ fontSize: 10, marginHorizontal: 9, }}>Commodities</Text>

                            </View>
                            <View style={{ flexDirection: 'column', marginHorizontal: 10 }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <TouchableOpacity style={{
                                        marginVertical: 5,
                                        marginHorizontal: 9,
                                        paddingTop: 5,
                                        paddingBottom: 5,
                                        paddingRight: 5,
                                        paddingLeft: 5,
                                        backgroundColor: '#2E2D4F',
                                        borderRadius: 5
                                    }}>
                                    </TouchableOpacity>
                                    <Text style={{ fontWeight: 'bold', fontSize: 12 }}>20.15%</Text>
                                </View>
                                <View style={{ flexDirection: 'column', flexWrap: 'wrap' }}>
                                    <Image source={require('../mainComponents/image/technology.png')} style={{ alignSelf: 'center' }} />
                                    <Text style={{ fontSize: 10, width: '49%', marginHorizontal: 9, }}>Aerospace & Defence</Text>
                                </View>

                            </View>
                            <View style={{ flexDirection: 'column', marginHorizontal: -20 }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <TouchableOpacity style={{
                                        marginVertical: 5,
                                        marginHorizontal: 5,
                                        paddingTop: 5,
                                        paddingBottom: 5,
                                        paddingRight: 5,
                                        paddingLeft: 5,
                                        backgroundColor: '#9B99AB',
                                        borderRadius: 5
                                    }}>
                                    </TouchableOpacity>
                                    <Text style={{ fontWeight: 'bold' }}>10.42%</Text>
                                </View>
                                <View style={{ flexDirection: 'column', flexWrap: 'wrap' }}>
                                    <Image source={require('../mainComponents/image/circuit.png')} style={{ alignSelf: 'center' }} />
                                    <Text style={{ fontSize: 10, width: '50%', marginHorizontal: 9, }} numberOfLines={2}>Technology & Media</Text>
                                </View>
                            </View><View style={{ flexDirection: 'column' }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <TouchableOpacity style={{
                                        marginVertical: 5,
                                        marginHorizontal: 5,
                                        paddingTop: 5,
                                        paddingBottom: 5,
                                        paddingRight: 5,
                                        paddingLeft: 5,
                                        backgroundColor: '#D95847',
                                        borderRadius: 5
                                    }}>
                                    </TouchableOpacity>
                                    <Text style={{ fontWeight: 'bold' }}>9.99%</Text>
                                </View>
                                <View style={{ flexDirection: 'column', flexWrap: 'wrap' }}>
                                    <Image source={require('../mainComponents/image/house.png')} style={{ marginLeft: 14 }} />
                                    <Text style={{ fontSize: 10, width: '50%', marginLeft: 14 }}>Retail</Text>
                                </View>

                            </View>
                        </View>
                    </View>
                    <View style={{ marginTop: 10 }}></View>
                    <View style={{ flexDirection: 'column', borderWidth: 1, borderColor: '#E9E9E9', borderRadius: 5, marginHorizontal: 5, paddingTop: 10, paddingBottom: 20 }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 20, marginHorizontal: 10 }}>Your Month Performace</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View style={{ flexDirection: 'row', marginHorizontal: 30 }}>
                                <Image source={require('../mainComponents/image/sampleimage.jpeg')} style={{ borderRadius: 100, height: 50, width: 50 }} />
                                <View style={{ flexDirection: 'row', marginVertical: 10, marginHorizontal: 10 }}>
                                    <Icon
                                        name='dollar-sign'
                                        color='black'
                                        size={25}
                                        style={{ textAlign: 'center', fontWeight: 'bold' }}
                                    />
                                    <Text style={{ fontWeight: 'bold', fontSize: 18 }}>10,000</Text>
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <TouchableOpacity style={{
                                    marginVertical: 10,
                                    marginHorizontal: 10,
                                    paddingTop: 1,
                                    paddingBottom: 1,
                                    paddingRight: 5,
                                    paddingLeft: 5,
                                    backgroundColor: '#48DC98',
                                    borderRadius: 5
                                }}><Text style={{ color: 'white', fontSize: 20 }}>+6.03%</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={{ margin: 3, backgroundColor: '#e4e3e9' }}>
                        <Card containerStyle={{ marginTop: 3 }}>
                            <View style={{ flexDirection: 'column' }}>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Image source={require('../mainComponents/image/sampleimage.jpeg')} style={{ borderRadius: 100, height: 30, width: 30, marginHorizontal: -10, marginVertical: -10 }} />
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 15, marginVertical: -3 }}>
                                            <View><Text style={{ fontWeight: 'bold' }}>Hunter Berg</Text></View>
                                            <View style={{ marginHorizontal: 4 }}><Text style={{ color: '#A5AABF' }}>bought</Text></View>
                                            <View><Text style={{ fontWeight: 'bold' }}>#cspr</Text></View>
                                        </View>
                                    </View>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <Text style={{ color: '#BEC1D0', marginVertical: -8, fontSize: 10 }}>5h ago</Text>
                                        <Icon
                                            name='flag'
                                            color='#BEC1D0'
                                            size={8}
                                            style={{ marginVertical: -5, marginHorizontal: 3 }}></Icon>
                                    </View>
                                </View>
                                <View style={{ borderWidth: 1, borderColor: '#E9E9E9', borderRadius: 5, marginHorizontal: 25, marginRight: 1, marginVertical: 20 }}>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <View style={{ flexDirection: 'column', marginHorizontal: 12, marginVertical: 5 }}>
                                            <Text style={{ fontWeight: 'bold' }}>Casper Sleep</Text>
                                            <View style={{ flexDirection: 'row', justifyContent:'space-between' }}>
                                                <Text style={{paddingRight:5}}>$0.06</Text>
                                                <Icon
                                                    name='arrow-right'
                                                    style={{marginVertical:3}}></Icon>
                                                <Text> $9.35</Text>
                                            </View>
                                        </View>
                                        <TouchableOpacity style={{
                                            marginVertical: 10,
                                            marginHorizontal: 10,
                                            paddingTop: 1,
                                            paddingBottom: 1,
                                            paddingRight: 5,
                                            paddingLeft: 5,
                                            backgroundColor: '#48DC98',
                                            borderRadius: 5
                                        }}><Text style={{ color: 'white', fontSize: 13 }}>+3.20%</Text>
                                        </TouchableOpacity>
                                    </View>
                                    <Chart></Chart>
                                </View>
                            </View>
                        </Card>
                        <Card containerStyle={{ marginTop: 3 }}>
                            <View style={{ flexDirection: 'column' }}>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Image source={require('../mainComponents/image/sampleimage.jpeg')} style={{ borderRadius: 100, height: 30, width: 30, marginHorizontal: -10, marginVertical: -10 }} />
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 15, marginVertical: -3 }}>
                                            <View><Text style={{ fontWeight: 'bold' }}>Hunter Berg</Text></View>
                                            <View style={{ marginHorizontal: 4 }}><Text style={{ color: '#A5AABF' }}>bought</Text></View>
                                            <View><Text style={{ fontWeight: 'bold' }}>#cspr</Text></View>
                                        </View>
                                    </View>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <Text style={{ color: '#BEC1D0', marginVertical: -8, fontSize: 10 }}>5h ago</Text>
                                        <Icon
                                            name='flag'
                                            color='#BEC1D0'
                                            size={8}
                                            style={{ marginVertical: -5, marginHorizontal: 3 }}></Icon>
                                    </View>
                                </View>
                                <View style={{ flexDirection: 'column', borderWidth: 1, borderColor: '#E9E9E9', borderRadius: 5, marginHorizontal: 25, marginRight: 1, marginVertical: 20 }}>
                                    <View style={{ flexDirection: 'row', backgroundColor: '#FBFBFB' }}>
                                        <TouchableOpacity style={{
                                            marginVertical: 3,
                                            marginHorizontal: 3,
                                            paddingTop: 1,
                                            paddingBottom: 1,
                                            paddingRight: 3,
                                            paddingLeft: 3,
                                            backgroundColor: '#2E2D4F',
                                            borderRadius: 5
                                        }}>
                                            <View style={{ flexDirection: 'row' }}>
                                                <Icon
                                                    name='arrow-alt-circle-up'
                                                    color='white'
                                                    size={20}
                                                ></Icon>
                                                <Text style={{ color: 'white', fontSize: 15, marginHorizontal: 2 }}>BUY</Text>
                                            </View>
                                        </TouchableOpacity>
                                        <Text style={{ marginVertical: 5, fontSize: 12 }}>10% position</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <View style={{ flexDirection: 'column', marginHorizontal: 3, marginVertical: 3 }}>
                                            <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Vertex Pharmaceuticals</Text>
                                            <Text style={{ fontWeight: 'bold' }}>$239.64</Text>
                                        </View>
                                        <View>
                                            <Image source={require('../mainComponents/image/vertex.png')} style={{marginBottom:3,marginRight:3}} />
                                        </View>
                                    </View>
                                </View>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal:30 }}>
                                    <View style={{ flexDirection: 'row' }}><Icon
                                        name='heart'
                                        color='#C3C3CD'></Icon>
                                        <Text style={{ color: '#C3C3CD', marginVertical:-4.5, marginHorizontal:4 }}>Like</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Icon
                                            name='comment-alt'
                                            color='#C3C3CD'></Icon>
                                        <Text style={{ color:'#C3C3CD',marginVertical:-4.5, marginHorizontal:4  }}>Comment</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Icon
                                            name='share-square'
                                            color='#C3C3CD'></Icon>
                                        <Text style={{ color:'#C3C3CD',marginVertical:-3.5, marginHorizontal:4  }}>Share</Text>
                                    </View>
                                </View>
                            </View>
                        </Card>
                    </View>
                </View>
            </ScrollView>

        )
    }
}