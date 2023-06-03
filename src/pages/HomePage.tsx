import React, {useState} from 'react';
import {
  Text,

  View,
  StyleSheet,
  ActivityIndicator,

} from 'react-native';
import axios from 'axios';
import {TouchableOpacity} from 'react-native';
import { ColorPalette } from '../theme/ColorPalette';

const HomePage = (props: {navigation: any}) => {
  const {navigation} = props;
  const [isLoading, setLoading] = useState(false);

  const openNewPage = (pageTitle: string) => {
    navigation.navigate('Employees', { employee: pageTitle });
  };
  return (
    <View style={{flex: 1, padding: 1}}>
      <Text
        style={{
          color: ColorPalette.gray,
          padding: 10,
          fontSize: 30,
          textAlign: 'center',
          backgroundColor: '#C5CAE9',
        }}>
        Menü
      </Text>

      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <View style={styles.container}>
          <TouchableOpacity
            style={[styles.button, {backgroundColor: '#FFCDD2'}]}
            onPress={() => openNewPage('Doktor')}>
            <Text style={styles.buttonText}>Doktorlar</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, {backgroundColor: '#F8BBD0'}]}
            onPress={() => openNewPage('Hemşire')}>
            <Text style={styles.buttonText}>Hemşireler</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, {backgroundColor: '#E1BEE7'}]}
            onPress={() => openNewPage('Hemşire Yardımcısı')}>
            <Text style={styles.buttonText}>Hemşire Yardımcıları</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, {backgroundColor: '#D1C4E9'}]}
            onPress={() => openNewPage('Hizmetli')}>
            <Text style={styles.buttonText}>Hizmetliler</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, {backgroundColor: '#BBDEFB'}]}
            onPress={() => openNewPage('Diğer')}>
            <Text style={styles.buttonText}>Diğer</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#f9c2ff',

    height: 200,
    justifyContent: 'center',
    marginVertical: 6,
    marginHorizontal: 10,
    padding: 10,
  },
  title: {
    fontSize: 20,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: 300,
    height: 80,
    borderRadius: 10,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default HomePage;
