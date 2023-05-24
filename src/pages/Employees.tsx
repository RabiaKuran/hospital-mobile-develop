import React, { useEffect, useState } from 'react';
import {
  Text,
  FlatList,
  View,
  StyleSheet,
  ActivityIndicator,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import axios from 'axios';
import { ColorPalette } from '../theme/ColorPalette';

type Employees = {
  id: string;
  adSoyad: string;
  gorev: string;
};

type ItemProps = {
  adSoyad: string;
  gorev: string;
  onPress: () => void;
};

const Item = ({ adSoyad, gorev, onPress }: ItemProps) => (
  <TouchableOpacity style={styles.item} onPress={onPress}>
    <View>
      <Text style={styles.title}>{adSoyad}</Text>
      <Text>{gorev}</Text>
    </View>
    <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Telefon</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>E-posta</Text>
      </TouchableOpacity>
    </View>
  </TouchableOpacity>
);

const Employees = (props: { navigation: any; route: any }) => {
  const [isLoading, setLoading] = useState(false);
  const [datas, setDatas] = useState<Employees[]>([]);
  const { employee } = props.route?.params;

  const getEmployee = async () => {
    try {
      setLoading(true);
      const response = await axios.get('http://10.0.2.2:8080/api/employees/getall');
      setDatas(response.data.data);
      console.log(datas)
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
    props.navigation.navigate('EmployeeDetails', { employee: item });
  };

  const renderItem = ({ item }: { item: Employees }) => {
    if (item.gorev === employee) {
      return (
        <Item
          adSoyad={item.adSoyad}
          gorev={item.gorev}
          onPress={() => handleItemPress(item)}
        />
      );
    } else {
      return null;
    }
  };

  return (
    <View style={{ flex: 1, padding: 1 }}>
      <Text
        style={{
          color: ColorPalette.gray,
          padding: 10,
          fontSize: 24,
          textAlign: 'center',
          backgroundColor: '#f9c2ff',
        }}
      >
        ÇALIŞANLAR
      </Text>

      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={datas}
          keyExtractor={(item) => item.id}
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
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  button: {
    backgroundColor: '#ccc',
    borderRadius: 8,
    padding: 8,
    marginLeft: 8,
  },
  buttonText: {
    color: 'white',
  },
});

export default Employees;
