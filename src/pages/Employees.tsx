import React, {useEffect, useState} from 'react';
import {
  Text,
  FlatList,
  View,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import axios from 'axios';
import {ColorPalette} from '../theme/ColorPalette';

type Employees = {
  id: string;
  adSoyad: string;
  gorev: string;
  state: string;
  meslek: string;
  resim: string;
  queue: string;
};

type ItemProps = {
  adSoyad: string;
  gorev: string;
  state: string;
  onPress: () => void;
  meslek: string;
  resim: string;
  queue: string;
};

const Employees = (props: {navigation: any; route: any}) => {
  const [isLoading, setLoading] = useState(false);
  const [datas, setDatas] = useState<Employees[]>([]);
  const {employee} = props.route?.params;

  const getEmployee = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        'http://10.0.2.2:8080/api/employees/getall',
      );
      setDatas(response.data.data);

      console.log(datas);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getEmployee();
  }, []);

  const handleItemPress = (item: Employees) => {
    console.log(item);
    props.navigation.navigate('EmployeeDetails', {employee: item});
  };
  const Item = ({adSoyad, gorev, state, onPress, meslek, resim,queue}: ItemProps) => (
    <TouchableOpacity style={styles.item} onPress={onPress}>
      <View>
        <Text style={styles.title}>{adSoyad}</Text>
        <Text>{gorev}</Text>
      </View>
      <View style={styles.buttonContainer}>
        {state === 'Meşgul' ? (
          <TouchableOpacity style={styles.buttonState}>
            <Text style={styles.buttonText}>{state}</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.buttonState2}>
            <Text style={styles.buttonText}>{state}</Text>
          </TouchableOpacity>
        )}
        <TouchableOpacity style={styles.button} onPress={onPress}>
          <Text style={styles.buttonText}>Detay Gör</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
  const renderItem = ({item}: {item: Employees}) => {
    if (item?.meslek === employee) {
      return (
        <Item
          adSoyad={item.adSoyad}
          gorev={item.gorev}
          onPress={() => handleItemPress(item)}
          state={item.state}
          meslek={item.meslek}
          resim={item.resim}
          queue = {item.queue}
        />
      );
    } else {
      return null;
    }
  };

  return (
    <View style={{flex: 1}}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={datas}
          keyExtractor={item => item.id}
          renderItem={renderItem}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#f9c2ff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 100,
    marginVertical: 6,
    marginHorizontal: 10,
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  button: {
    backgroundColor: ColorPalette.gray,
    borderRadius: 8,
    padding: 8,
    marginLeft: 8,
  },
  buttonState: {
    backgroundColor: ColorPalette.red3,
    borderRadius: 8,
    padding: 8,
    marginLeft: 8,
  },
  buttonState2: {
    backgroundColor: ColorPalette.green3,
    borderRadius: 8,
    padding: 8,
    marginLeft: 8,
  },
  buttonText: {
    color: 'white',
  },
});

export default Employees;
