import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import MyButton from '../components/MyButton';

interface IProductUpdateProps {
  dataSource: any;
  edit?: any;
  controlButton?: any;
}

const Cart = (props: {navigation: any}) => {
  const [cart, setCart] = useState([] as any);
  const {navigation} = props;

  return (
    <ScrollView>
      <SafeAreaView style={{backgroundColor: '#9370db', flex: 1}}>
        <View
          style={{
            backgroundColor: 'white',
            margin: 10,
            borderRadius: 6,
            padding: 10,
          }}>
          <Text style={{textAlign: 'center', fontSize: 15}}>
            Onaylandıktan sonra 10 dakika da yanınızda.
          </Text>

          <Text style={{textAlign: 'center', fontWeight: 'bold'}}>
            Arriving in 10 min
          </Text>
        </View>

        <Text style={styles.text}>Sepettekiler</Text>
        {cart.map((item: {image: any; name: any; id: any}) => (
          <Pressable
            key={item.id}
            style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={{margin: 10}}>
              <Image
                style={{width: 100, height: 100, borderRadius: 4}}
                source={{uri: item.image}}
              />
            </View>
            <View>
              <Text style={{fontWeight: 'bold'}}>{item.name}</Text>
              {
                <Pressable
                  onPress={() =>
                    setCart(cart.filter((x: {id: string}) => x.id !== item.id))
                  }>
                  <Text
                    style={{
                      borderColor: 'gray',
                      borderWidth: 1,
                      marginVertical: 10,
                      padding: 5,
                    }}>
                    Sepeten Çıkar
                  </Text>
                </Pressable>
              }
            </View>
          </Pressable>
        ))}

        <View style={{alignItems: 'center', justifyContent: 'center'}}></View>

        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => navigation.navigate('Cart')}>
          <MyButton textTitle="Onayla" backgroundColor="#000" />
        </TouchableOpacity>
        <View
          style={{
            padding: 10,
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: 'white',
            margin: 10,
            borderRadius: 8,
            marginTop: 10,
          }}>
          <Image
            style={{
              width: 60,
              height: 60,
              borderRadius: 30,
              borderColor: '#9370db',
              borderWidth: 1,
            }}
            source={{
              uri: 'https://media.istockphoto.com/id/1255846059/tr/vekt%C3%B6r/hastane-binas%C4%B1-simgesi-vekt%C3%B6r-%C5%9Fablonu.jpg?s=612x612&w=0&k=20&c=Tli5hNpi_NGwntGkKQ9uFNtgtmJzwYHknh-y9_t-Sw4=',
            }}
          />

          <View style={{marginLeft: 20}}>
            <Text style={{fontSize: 18, fontWeight: '700', color: '#ff6e4a'}}>
              Onayladıktan sonra
            </Text>
            <Text style={{fontSize: 17, fontWeight: '600', color: '#696969'}}>
              Max Süre: 10dakika
            </Text>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  text: {
    flex: 6,
    color: '#8b008b',
    marginTop: 10,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 24,
    textAlign: 'center',
  },

  loginButton: {
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Cart;
