import React, {Component, useEffect, useState} from 'react';
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
import axios from 'axios'; // paketi sayfamıza ekliyoruz
import {Grid} from '@mui/material';

type Movie = {
  id: string;
  adSoyad: string;
  gorev: string;
};

const HomePage = (props: {navigation: any}) => {
  const {navigation} = props;
  const [isLoading, setLoading] = useState(false);
  const [datas, setDatas] = useState<Movie[]>();
  // define state
  class App extends Component {
    state = {
      emp: [],
    };

    constructor() {
      super(props);
    }
  }

  // GET Request Using Axios HTTP // get ile veri çekme
  const getEmployee = async () => {
    await axios
      .get('http://10.0.2.2:8080/api/employees/getall')
      .then(res => {
        const data = res.data;
        //this.setState({ emps });
        console.log('data geliyor');
        console.log(res.data);
        setDatas(res.data.data);
      })
      .catch(error => console.log(error));
  };

  useEffect(() => {
    getEmployee();
  }, []);
  return (
    <View style={{flex: 1, padding: 24}}>
      <Text>ÇALIŞANLAR</Text>
  
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={datas}
          keyExtractor={({id}) => id}
          renderItem={({item}) => (
            <Text>
              {item.adSoyad} - {item.gorev}
            </Text>
          )}
        />
      )}
    </View>
  );
};
export default HomePage;
