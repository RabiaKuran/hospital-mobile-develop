import React, {Component, useState} from 'react';
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
type ItemData = {
  id: string;
  email: string;
};
type ItemProps = {
  email: string;
};
const Item = ({email}: ItemProps) => (
  <View style={style.item}>
    <Text style={style.title}>{email}</Text>
  </View>
);

const InformationAdd = (props: {navigation: any}) => {
  const [isLoading, setLoading] = useState(false);
  const [datas, setDatas] = useState<Model[]>();
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [phone, setPhone] = useState('');
  const [status, setStatus] = useState('');

  // define state
  class App extends Component {
    state = {
      emp: [],
    };

    constructor() {
      super(props);
    }
  }

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
        <View style={style.header}></View>

        <View style={style.formView}>
          <View style={style.header}>
            <Text style={style.title}>Informations</Text>
          </View>
          <TextInput
            placeholder="Oda durum"
            onChangeText={e => setStatus(e)}
            value={status}
          />
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
              textTitle="SAVE"
              backgroundColor="#000"
              onPress={() => postPatient(userName, email, phone)}
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

export default InformationAdd;
