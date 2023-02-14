import { StyleSheet, Text, View, SafeAreaView ,Image, ScrollView, Pressable} from "react-native";
import React, { useState } from "react";


const Cart = () => {
  const [cart, setCart] = useState([] as any);
  console.log('cart items:', cart);
  return (
    <ScrollView>

    <SafeAreaView style={{ backgroundColor: "#006491", flex: 1 }}>
      <View
        style={{
          backgroundColor: "white",
          margin: 10,
          borderRadius: 6,
          padding: 10,
        }}
      >
        <Text style={{ textAlign: "center", fontSize: 15 }}>
          Onaylandıktan sonra 10dakika da yanınızda.
        </Text>

        <Text style={{ textAlign: "center", fontWeight: "bold" }}>
          Arriving in 10 min
        </Text>     
      </View>
      <SafeAreaView style={styles.container}>
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
                    Sayıyı Azalt
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
          </View>
        ),
      )}
   

      <View style={{alignItems:"center",justifyContent:"center"}}>
         
        </View>

        <View
        style={{
          padding: 10,
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "white",
          margin:10,
          borderRadius:8,
          marginTop:10,
        }}
      >
        <Image
          style={{
            width: 60,
            height: 60,
            borderRadius: 30,
            borderColor: "#fff0f5",
            borderWidth: 1,
          }}
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyLXBWH6Tl3ITRFCI-ByH7IR_c0gRQhRsXzQ&usqp=CAU",
          }}
        />
        <View style={{ marginLeft: 20 }}>
          <Text style={{ fontSize: 18, fontWeight: "700", color: "#ff6e4a" }}>
            4 valets near the restaurent
          </Text>
          <Text style={{ fontSize: 17, fontWeight: "600", color: "#696969" }}>
            Anyone will pick your order
          </Text>
        </View>
      </View>
    </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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

export default Cart;

