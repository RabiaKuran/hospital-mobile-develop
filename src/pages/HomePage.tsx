import React, {Component, useEffect, useState} from 'react';
import {
  Text,
  FlatList,  View,
  StyleSheet,
  ActivityIndicator,
  StatusBar,
} from 'react-native';
import axios from 'axios'; // paketi sayfamıza ekliyoruz
import { ColorPalette } from '../theme/ColorPalette';

type Movie = {
  id: string;
  adSoyad: string;
  gorev: string;
};
type ItemData = {
  id: string;
  adSoyad: string;
};

const getItem = (_data: unknown, index: number): ItemData => ({
  id: Math.random().toString(12).substring(0),
  adSoyad: `Item ${index + 1}`,
});

const getItemCount = (_data: unknown) => 50;

type ItemProps = {
  adSoyad: string;
};

const Item = ({adSoyad}: ItemProps) => (
  <View style={styles.item}>
    <Text style={styles.title}>{adSoyad}</Text>
  </View>
);

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
        console.log('data geliyorrr');
        console.log(res.data);
        setDatas(res.data.data);
      })
      .catch(error => console.log(error));
  };

  useEffect(() => {
    getEmployee();
  }, []);

  return (
    <View style={{flex: 1, padding: 1}}>
      <Text style={{color:ColorPalette.black, padding: 10, fontSize: 30, textAlign: 'center',backgroundColor: ColorPalette.gray}}>ÇALIŞANLAR</Text>

      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={datas}
          //keyExtractor={({id}) => id}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <Item adSoyad={item.adSoyad + " =>"+ item.gorev} />       
          )}
          
        />
      )}
     
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  item: {
    backgroundColor: '#f9c2ff',
    height: 100,
    justifyContent: 'center',
    marginVertical: 6,
    marginHorizontal: 10,
    padding: 16,
  },
  title: {
    fontSize: 20,
  },
});

export default HomePage;
