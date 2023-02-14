import React, { Component } from 'react';
import { SafeAreaView, FlatList, Text, View, StyleSheet, Image } from 'react-native';



export default function Language({route}: {route: any}) {
       
    return (
        <SafeAreaView>
            <View>
                <Text>{route.params.blogpost.name}</Text>
                <Text>{route.params.blogpost.content}</Text>
            </View>
        </SafeAreaView>
    );
}



