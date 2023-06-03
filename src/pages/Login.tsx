import React, {Component} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  TextInput,
} from 'react-native';
//Components
import MyButton from '../components/MyButton';
//Variables
const screenHeight = Dimensions.get('window').width;
import {useState} from 'react';
import TokenService from '../services/token/TokenService';
import RedirectHelper from '../helper/RedirectHelper';

import Language from './Language';
import {AnyAction} from 'redux';

const Login = (props: {navigation: any}) => {
  /*const [data, setData] = useState({
    name: '',
    content: '',
  });
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [showError, setShowError] = useState(false);
  const handleSignIn = async () => {
    await TokenService.getToken(userName, password)
      .then(response => {
        window.localStorage.setItem('token', response.accessToken);
        RedirectHelper.redirect('/panel');
        setUserName('');
        setPassword('');
      })
      .catch(() => {
        setShowError(true);
      });
  };

  const handleClose = () => {
    RedirectHelper.redirect('/');
    setShowError(false);
  };*/
  const {navigation} = props;

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.backgroundColor} />
      <View style={styles.header}>
        <Text style={styles.description}>Hospital App!</Text>
      </View>
      <View style={styles.formView}>
        <TextInput
          placeholder="Mail"
          keyboardType="email-address"
          autoComplete="email"
          //value={userName}
          //onChangeText={value => setData({...data, name: value})}
        />

        <TextInput
          placeholder="Password"
          keyboardType="numeric"
          //value={password}
          secureTextEntry={true}
          //onChangeText={value => setData({...data, name: value})}
        />

        <TouchableOpacity
          style={styles.loginButton}
          onPress={() =>
            navigation.navigate('Profil', {
              username: 'Rabia',
              password: '242141',
            })
          }>
          <MyButton
            textTitle="Sign In"
            backgroundColor="#000"
            onPress={() =>
              navigation.navigate('Profil', {
                username: 'Rabia',
                password: '242141',
              })
            }
          />
        </TouchableOpacity>
      </View>
      <View style={styles.CreateAccountView}>
        <Text>Don't have an account?</Text>
        <TouchableOpacity>
          <Text style={styles.accountCreateText}>Create Account Noww!</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
  },
  backgroundColor: {
    position: 'absolute',
    top: 0,
    left: 0,
    flex: 1,
    backgroundColor: '#2975e7',
    height: screenHeight,
    width: '100%',
  },
  header: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    marginVertical: 65,
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
  },
  description: {
    fontSize: 38,
    color: '#fff',
    fontWeight: 'bold',
  },
  formView: {
    height: 'auto',
    width: '85%',
    backgroundColor: '#fff',
    padding: 15,
    paddingTop: 50,
    paddingBottom: 30,
    borderRadius: 10,
    justifyContent: 'center',
  },
  loginButton: {
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  CreateAccountView: {
    alignItems: 'center',
    marginTop: '20%',
  },
  accountCreateText: {
    fontSize: 20,
    marginTop: 10,
    fontWeight: '600',
    marginBottom: 5,
    borderBottomWidth: 1,
  },
  input: {
    borderBottomWidth: 2,
    borderBottomColor: '#000',
    marginBottom: 5,
    paddingLeft: 5,
  },
  customText: {
    borderBottomWidth: 2,
    borderBottomColor: '#2975e7',
    marginBottom: 5,
    paddingLeft: 5,
    fontWeight: 'bold',
    fontSize: 16,
  },
});
export default Login;
