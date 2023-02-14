import React, {Component} from 'react';
import {
  SafeAreaView,
  Text,
  FlatList,
  ScrollView,
  View,
  StyleSheet,
  Dimensions,
  ImageBackground,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  Button,
} from 'react-native';


const HomePage = (props: { navigation: any; }) => {
  const {navigation} = props;
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate('Profil',{
            username: 'Rabia',
            password: '242141',
          })}
      />
    </View>
  );
};
export default HomePage;