import React, { Component } from 'react';
import {  Text, StyleSheet, View } from 'react-native';

export default class MyButton extends Component<any> {
    render() {
        return (
            <View style={[styles.touchable]}>
                <Text style={[styles.title]}>{this.props.textTitle}</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    touchable: {
        width: '75%',
        backgroundColor: 'orange',
        justifyContent: 'center',
        alignItems:'center',
        borderRadius:25,
    },
    title: {
        fontSize: 20,
        color:'#fff',
        fontWeight:'600',
        paddingHorizontal:12,
        paddingVertical:8
    }
});



