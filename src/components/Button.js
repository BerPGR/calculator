import React from "react";
import {
    StyleSheet,
    Text,
    Dimensions,
    TouchableHighlight
} from 'react-native';

const style = StyleSheet.create({
    button: {
        fontSize: 40,
        height: Dimensions.get('window').width / 4,
        width: Dimensions.get('window').width / 4,
        padding: 20,
        backgroundColor: '#F0F0F0',
        textAlign: "center",
        borderWidth: 1,
        borderColor: '#888'
    }
})

export default props => {
    return (
        <TouchableHighlight onPress={props.onClick}>
            <Text style={style.button}>{props.label}</Text>
        </TouchableHighlight>
    )
}