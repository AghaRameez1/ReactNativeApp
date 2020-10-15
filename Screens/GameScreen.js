import React, { PureComponent } from "react";
import { AppRegistry, StyleSheet, StatusBar,View, TouchableOpacity, Alert,Button} from "react-native";
import { GameEngine } from "react-native-game-engine";
import Constant from "../mainComponents/GameSystems/Constants";
import Head from "../mainComponents/GameSystems/Head";
import Food from '../mainComponents/GameSystems/Food';
import Tail from '../mainComponents/GameSystems/Tail';
import {GameLoop} from '../mainComponents/GameSystems/GameLoop'

export default class BestGameEver extends PureComponent {
  constructor(props) {
    super(props);
    this.boardSize = Constant.GRID_SIZE * Constant.CELL_SIZE;
    this.engine = null;
    this.state = {
        running: true
    }
}
    onEvent = (e) =>{
        if(e.type ==="game-over"){
            Alert.alert('Game Over');
            this.setState({
                running: false
            })
        }
    }
    randomBetween = (min, max) => {
        return Math.floor(Math.random() * (max-min +1)+min)

    }
    reset = () => {
        this.engine.swap({
            head:{ position:[0,0], xspeed:1,yspeed:0,updateFrequency:10, nextMove:10, size:Constant.CELL_SIZE, renderer:<Head/>},
                food:{ position:[this.randomBetween(0, Constant.GRID_SIZE -1),this.randomBetween(0, Constant.GRID_SIZE -1)], size:Constant.CELL_SIZE, renderer:<Food/>},
                tail:{ size:Constant.CELL_SIZE, elements:[], renderer:<Tail/>}
        })
        this.setState({
            running: true
        })
    }
  render() {
    return (
      <View
        style={styles.container}>
            <GameEngine
            ref = {(ref) => {this.engine = ref}}
            style={{width:this.boardSize, height:this.boardSize, flex:null, backgroundColor:'#ffffff'}}
            systems={[GameLoop]}
            entities={{
                head:{ position:[0,0], xspeed:1,yspeed:0,updateFrequency:10, nextMove:10, size:Constant.CELL_SIZE, renderer:<Head/>},
                food:{ position:[this.randomBetween(0, Constant.GRID_SIZE -1),this.randomBetween(0, Constant.GRID_SIZE -1)], size:Constant.CELL_SIZE, renderer:<Food/>},
                tail:{ size:Constant.CELL_SIZE, elements:[], renderer:<Tail/>}
            }}
            onEvent= {this.onEvent}
            running={this.state.running}
            
            />
            <Button title='New Game' onPress={this.reset}></Button>
             <View style={styles.controls}>
                    <View style={styles.controlRow}>
                        <TouchableOpacity onPress={() => { this.engine.dispatch({ type: "move-up" })} }>
                            <View style={styles.control} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.controlRow}>
                        <TouchableOpacity onPress={() => { this.engine.dispatch({ type: "move-left" })} }>
                            <View style={styles.control} />
                        </TouchableOpacity>
                        <View style={[styles.control, { backgroundColor: null}]} />
                        <TouchableOpacity onPress={() => { this.engine.dispatch({ type: "move-right" })}}>
                            <View style={styles.control} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.controlRow}>
                        <TouchableOpacity onPress={() => { this.engine.dispatch({ type: "move-down" })} }>
                            <View style={styles.control} />
                        </TouchableOpacity>
                    </View>
                </View>




        </View>
    
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000',
        alignItems: 'center',
        justifyContent: 'center'
    },
    controls: {
        width: 300,
        height: 300,
        flexDirection: 'column',
    },
    controlRow: {
        height: 100,
        width: 300,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    control: {
        width: 100,
        height: 100,
        backgroundColor: 'blue'
    }
});
