import React, {Component, useEffect, useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import axios from 'axios'; // paketi sayfamıza ekliyoruz
import MyButton from '../components/MyButton';

type Model = {
  id: string;
  email: string;
  userName: string;
};

const Profil = (props: {navigation: any}) => {
  const {navigation} = props;
  const [datas, setDatas] = useState<Model[]>();
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [phone, setPhone] = useState('');

  // GET Request Using Axios HTTP // get ile veri çekme
  const getPatient = async () => {
    await axios
      .get('http://10.0.2.2:8080/api/mblusers/getAllUsers')
      .then(res => {
        const data = res.data;
        console.log('data geliyor');
        console.log(res.data);
        setDatas(res.data.data);
      })
      .catch(error => console.log(error));
  };
  useEffect(() => {
    getPatient();
  }, []);

  // Add Record Example Using React Axios
  const postPatient = (userName: any, email: any, phone: any) => {
    axios
      .post('http://10.0.2.2:8080/api/mblusers/add', {
        userName: userName,
        email: email,
        telefon: phone,
      })
      .then(res => {
        const data = res.data;
        console.log('data gitti');
        console.log(res.data);
      });
  };

  return (
    <ScrollView>
      <View>
        <View style={style.body}>
          <View style={style.avatarContainer}>
            <Text style={style.avatar}>RK</Text>
          </View>
          <View style={style.nameContainer}>
            <Text style={style.name}>Rabia Kuran</Text>
          </View>
          <View style={style.infoContainer}>
            <Text style={style.infoLabel}>Email:</Text>
            <Text style={style.infoText}>rabiakuran34@gmail.com</Text>
          </View>
          <View style={style.infoContainer}>
            <Text style={style.infoLabel}>Oda:</Text>
            <Text style={style.infoText}>A-308</Text>
          </View>
          <View style={style.infoContainer}>
            <Text style={style.infoLabel}>Yatış Sebebi:</Text>
            <Text style={style.infoText}>Diyabet</Text>
          </View>
          <View style={style.infoContainer}>
            <Text style={style.infoLabel}>Telefon:</Text>
            <Text style={style.infoText}>5432229694</Text>
          </View>
        </View>
        <View style={style.header}></View>

        <View style={style.formView}>
          <View style={style.header}>
            <Text style={style.title}>Informations</Text>
          </View>
          <TextInput
            placeholder="Mail"
            keyboardType="email-address"
            autoComplete="email"
            onChangeText={e => setEmail(e)}
            value={email}
          />

          <TextInput
            placeholder="User Name"
            secureTextEntry={false}
            onChangeText={e => setUserName(e)}
            value={userName}
          />
          <TextInput
            placeholder="Phone"
            onChangeText={e => setPhone(e)}
            value={phone}
          />

          <TouchableOpacity
            style={style.loginButton}
            onPress={() => postPatient(userName, email, phone)}>
            <MyButton
              textTitle="Save"
              backgroundColor="#000"
              onPress={() => postPatient(userName, email, phone)}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={style.loginButton}
            onPress={() => navigation.navigate('InformationAdd')}>
            <MyButton
              textTitle="Add informationn"
              backgroundColor="#000"
              onPress={() => navigation.navigate('InformationAdd')}
            />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {padding: 15, justifyContent: 'center', alignItems: 'center'},
  title: {fontWeight: '500', fontSize: 25, color: '#525464', marginTop: -40},
  logo_area: {alignItems: 'center', marginTop: 1},
  board: {marginTop: 10, paddingHorizontal: 30, paddingTop: 1},
  item: {marginBottom: 20},
  alert: {color: 'red', fontSize: 15},
  social_item: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#E2E2E0',
    width: 100,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  social: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  button_text: {
    color: 'white',
    textAlign: 'center',
    fontSize: 17,
    fontWeight: '700',
  },
  button: {
    backgroundColor: '#20C3AF',
    padding: 15,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#B0B0C3',
    backgroundColor: '#F7F7F7',
    paddingVertical: 10,
    paddingHorizontal: 30,
    height: 50,
  },
  formView: {
    height: 'auto',
    width: 'auto',
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

  body: {
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarContainer: {
    width: 120,
    height: 120,
    borderRadius: 70,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 6,
    shadowOpacity: 0.16,
  },
  avatar: {
    fontSize: 60,
    fontWeight: '700',
  },
  nameContainer: {
    marginTop: 24,
    alignItems: 'center',
  },
  name: {
    fontSize: 24,
    fontWeight: '600',
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  infoLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#666666',
    marginRight: 8,
  },
  infoText: {
    fontSize: 16,
  },
});

export default Profil;
