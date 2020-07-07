import React from 'react';
import {Dimensions } from 'react-native';
import {
    LineChart,
} from "react-native-chart-kit";

const Chart = props => {
    return (
        <LineChart
            data={{
                labels: ["02 Mar", "04 Mar"],
                datasets: [
                    {
                        data: [
                            1,2,3,4,5,6,7,8,9
                        ]
                    }
                ]
            }}
            width={Dimensions.get("window").width} // from react-native
            height={220}
            yAxisLabel="$"
            yAxisSuffix="M"
            yAxisInterval={1} // optional, defaults to 1
            withOuterLines={false}
            withInnerLines={false}
            chartConfig={{
                backgroundColor: "#FFFF",
                backgroundGradientFrom: "#FFFF",
                backgroundGradientTo: "#FFFF",
                fillShadowGradient: '#9bcaf5',
                decimalPlaces: 2, // optional, defaults to 2dp
                color: (opacity = 1) => `rgb(177, 219, 248, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                propsForDots: {
                    r: "1",
                    strokeWidth: "2",
                    stroke: "black"
                }
            }}
            style={{
                marginVertical: 8,
                marginLeft: 5,
                marginRight: 25
            }}
        />
    )
}

export default Chart;