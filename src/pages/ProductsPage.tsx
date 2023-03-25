import React, {Component, useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Text,
  Pressable,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import MyButton from '../components/MyButton';

interface IProductsPageProps {
  text?: string;
  //props: IProductsPageProps
}

const ProductsPage = (props: {navigation: any}) => {
  const [cart, setCart] = useState([] as any);
  //const [cart, setCart] = useState<string[]>([]);
  console.log('cart items:', cart);
    const {navigation} = props;


  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <Text style={{textAlign: 'center', fontSize: 20}}>Ürünler</Text>
        {images.map(item => (
          <Pressable
            key={item.id}
            style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={{margin: 10}}>
              <Image
                style={{width: 100, height: 100, borderRadius: 8}}
                source={{uri: item.image}}
              />
            </View>
            <View>
              <Text style={{fontWeight: 'bold'}}>{item.name}</Text>
              {cart.includes(item) ? (
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
              ) : (
                <Pressable onPress={() => setCart([...cart, item])}>
                  <Text
                    style={{
                      borderColor: 'gray',
                      borderWidth: 1,
                      marginVertical: 10,
                      padding: 5,
                    }}>
                    Sepete Ekle
                  </Text>
                </Pressable>
              )}
            </View>
          </Pressable>
        ))}
      </SafeAreaView>
      <Text>Sepettekiler</Text>
      {cart.map(
        (item: {
          image: any;
          name:
            | string
            | number
            | boolean
            | React.ReactElement<any, string | React.JSXElementConstructor<any>>
            | React.ReactFragment
            | React.ReactPortal
            | null
            | undefined;
        }) => (
          <View>
            <Image
              style={{width: 100, height: 100, borderRadius: 8}}
              source={{uri: item.image}}
            />
            <Text>{item.name}</Text>
            <TouchableOpacity
            style={styles.loginButton}
            onPress={() =>
              navigation.navigate('Cart')
            }
            >
            <MyButton
              textTitle="Sepete git"
              backgroundColor="#000"
              onPress={() =>
                navigation.navigate('Cart')
              }
            />
          </TouchableOpacity>
          </View>
        ),
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  loginButton: {
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const images = [
  {
    image:
      'https://cdn.create.vista.com/api/media/medium/180340334/stock-photo-flat-lay-tasty-healthy-breakfast?token=',
    name: 'Kahvaltılık',
    id: '0',
  },
  {
    image:
      'https://cdn.create.vista.com/api/media/medium/82344084/stock-photo-cream-soup?token=',
    name: 'Mercimek',
    id: '1',
  },
  {
    image:
      'https://cdn.create.vista.com/api/media/medium/198020482/stock-photo-top-view-arranged-vegetarian-cream?token=',
    name: 'Vejetaryen Çorbası',
    id: '2',
  },
  {
    image:
      'https://cdn.create.vista.com/api/media/medium/200130718/stock-photo-solyanka-soup-cream?token=',
    name: 'Çorba',
    id: '3',
  },
  {
    image:
      'https://cdn.create.vista.com/api/media/medium/1651806/stock-photo-bean-soup?token=',
    name: 'Fasulye Çorbası',
    id: '4',
  },
  {
    image:
      'https://cdn.create.vista.com/api/media/medium/5005345/stock-photo-conceptual-image-fresh-juice-pours?token=',
    id: '5',
    name: 'Meyve Suyu',
  },
  {
    image:
      'https://cdn.create.vista.com/api/media/medium/173892782/stock-photo-pouring-water?token=',
    name: 'Su',
    id: '6',
  },
  {
    image:
      'https://cdn.create.vista.com/api/media/medium/174635602/stock-photo-cups-of-tea?token=',
    name: 'Çay',
    id: '7',
  },
  {
    image:
      'https://cdn.create.vista.com/api/media/medium/162338786/stock-photo-collage-with-various-fresh-fruits?token=',
    name: 'Meyve',
    id: '8',
  },
  {
    image:
      'https://cdn.create.vista.com/api/media/medium/406294672/stock-photo-bowl-spicy-king-oyster-mushroom?token=',
    name: 'Pirinç Pilavı',
    id: '9',
  },
  {
    image:
      'https://cdn.create.vista.com/api/media/medium/543324666/stock-photo-traditional-turkish-bulgur-pilaf-tomato?token=',
    name: 'Bulgur Pilavı',
    id: '10',
  },
];

export default ProductsPage;
