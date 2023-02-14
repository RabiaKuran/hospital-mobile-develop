import React, {Component, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  Button,
  ScrollView,
  Linking,
} from 'react-native';

const Profil = (props: {route: any;}) => {
 console.log(props);
 //const username = props.route.params.username;
  //const password = props.route.params.password;
  const {username, password} = props.route.params;
  const [countries, setCountries] = useState([]);
  //useEffect(() =>{
  // axios
  // .get("http://localhost:8080/api/mblusers/getAllUsers")
  //.then(response => setCountries(response.data))
  // .catch(error => console.log({error}));
  // },[])

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Profile Screen</Text>
      <Text>username: {username}</Text>
      <Text>password: {password}</Text>

      {countries?.map(row => {
      return (
        <>
          <Text>{"row.radSoyad"}</Text>
          <Text>{"row.odaNo"}</Text>
        </>
      );
    })}
    </View>
   
  );
};

const light_gray = '#E1E1E1';
const dark_gray = '#ABAAAA';

const styles = StyleSheet.create({
  header: {
    height: 50,
    borderBottomWidth: 1,
    justifyContent: 'center',
    borderBottomColor: light_gray,
  },
  sourceName: {
    fontSize: 23,
    fontWeight: '600',
    textAlign: 'center',
  },
  newsImage: {
    height: 250,
    width: '100%',
  },
  textArea: {
    padding: 10,
  },
  newsTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 15,
    borderLeftWidth: 3,
    paddingLeft: 15,
    borderLeftColor: '#2975e7',
  },
  newsContent: {
    fontSize: 18,
    marginTop: 25,
  },
  sourceViewButton: {
    width: '50%',
    height: 40,
    backgroundColor: '#2975e7',
    marginLeft: 'auto',
    marginRight: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    marginTop: 25,
    marginBottom: 25,
  },
  sourceViewText: {
    fontSize: 18,
    color: '#fff',
  },
});

export default Profil;
