import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity, Linking} from 'react-native';
import {ColorPalette} from '../theme/ColorPalette';
import IconButton from '../button/IconButton';

const EmployeeDetails = (props: {route: any}) => {
  const {employee} = props.route.params;
  const handlePressCall = () => {
    const phoneNumber = employee.telefon;
    Linking.openURL(`tel:${phoneNumber}`);
  };
  const handlePressMail = () => {
    const email = employee.mail;
    Linking.openURL(`mailto:${email}`);
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.imageContainer}>
          {employee.resim === ' ' ? (
            <Image
              source={{
                uri: 'https://media.istockphoto.com/id/1443209484/tr/vekt%C3%B6r/photo-booth-portrait-picture-illustration.jpg?s=612x612&w=0&k=20&c=qBtqGUErHFCLhEbVqyvqol3GIvr-EpwOp7AAJWuyeWo=',
              }}
              style={styles.image}
            />
          ) : (
            <Image source={{uri: employee.resim}} style={styles.image} />
          )}
        </View>
        <View style={styles.headerTextContainer}>
          <Text style={styles.name}>{employee.adSoyad}</Text>
          <Text style={styles.jobTitle}>{employee.gorev}</Text>
        </View>
      </View>
      <View style={styles.details}>
        <Text style={styles.detailTextTitle}>
          Bölüm: <Text style={styles.detailText}> {employee.bolum} </Text>
        </Text>
        <Text style={styles.detailTextTitle}>
          Meşguliyet Durumu:
          <Text style={styles.detailText}> {employee.state} </Text>
        </Text>
        <Text style={styles.detailTextTitle}>
          Telefon Numarası:
          <Text style={styles.detailText}> {employee.telefon} </Text>
        </Text>
        <Text style={styles.detailTextTitle}>
          E-posta: <Text style={styles.detailText}> {employee.mail} </Text>
        </Text>

        <Text style={styles.detailTextTitle}>
          Kat Numarası: <Text style={styles.detailText}> {employee.kat} </Text>
        </Text>
        <Text style={styles.detailTextTitle}>
          Bekleyen Hasta Sayısı:
          <Text style={styles.detailText}> {employee.queue} </Text>
        </Text>
      </View>
      <View style={styles.buttonContainer}>
      <TouchableOpacity
        style={{flex: 1, alignItems: 'flex-start', justifyContent: 'flex-start'}}>
        <IconButton iconName="mail" text="Mail Gönder" onPress={handlePressMail} />
      </TouchableOpacity>
      <TouchableOpacity
        style={{flex: 1, alignItems: 'flex-end', justifyContent: 'flex-start'}}>
        <IconButton iconName="phone" text="Ara" onPress={handlePressCall} />
      </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  imageContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginRight: 16,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 50,
  },
  headerTextContainer: {
    flex: 1,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  jobTitle: {
    fontSize: 18,
    color: 'gray',
  },
  details: {
    marginTop: 20,
    marginLeft: 2,
  },
  detailText: {
    fontSize: 18,
    marginBottom: 10,
    color: 'gray',
  },
  detailTextTitle: {
    fontSize: 20,
    color: 'green',
    marginBottom: 8,
    fontWeight: 'bold',
  },
  buttonState: {
    backgroundColor: ColorPalette.green,
    borderRadius: 8,
    padding: 8,

    marginTop: 20,
    textAlign: 'center',
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 24,
    fontStyle: 'normal',
    marginBottom: 4,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
});

export default EmployeeDetails;
