import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import MyButton from '../components/MyButton';
import {ColorPalette} from '../theme/ColorPalette';
import {Alert} from 'react-native';

type Products = {
  id: string;
  urunKategori: string;
  urunAdi: string;
  urunBilgi: string;
  urunResmi: string;
  quantity: number;
};
const Cart = (props: {route: any; navigation: any}) => {
  const [cart, setCart] = useState(props.route.params || []);
  const {navigation} = props;

  const handleProductPress = (product: Products) => {
    navigation.navigate('ProductDetails', {product});
  };

  const handleRemoveToCart = (product: Products) => {
    const updatedCart = cart.filter(
      (item: {id: string}) => item.id !== product.id,
    );
    setCart(updatedCart);
    console.log('handleRemoveToCarthandleRemoveToCarthandleRemoveToCart');
    console.log(cart);
    console.log('handleRemoveToCarthandleRemoveToCarthandleRemoveToCart');
  };

  const handleIncreaseQuantity = (product: Products) => {
    const updatedCart = cart.map((item: Products) => {
      if (item.id === product.id) {
        return {...item, quantity: item.quantity + 1};
      }
      return item;
    });
    setCart(updatedCart);
  };

  const handleDecreaseQuantity = (product: Products) => {
    const updatedCart = cart.map((item: Products) => {
      if (item.id === product.id && item.quantity > 1) {
        return {...item, quantity: item.quantity - 1};
      } else {
        return item;
      }
    });
    setCart(updatedCart);
  };
  const saveOrdersToDatabase = (cart: any) => {
    // Veritabanı kaydetme işlemlerini burada gerçekleştirin
    console.log('Siparişler veritabanına kaydedildi:', cart);
    // İletişim kutusu göstermek için gereken kodu buraya ekleyin
    Alert.alert('Sipariş Durumu', 'Siparişleriniz başarıyla gönderildi.', [
      {
        text: 'Tamam',
        onPress: () => setCart([]),
      },
    ]);
  };

  const isCartEmpty = cart.length === 0;
  const renderProductItem = ({item}: {item: Products}) => (
    <TouchableOpacity
      style={styles.productContainer}
      onPress={() => handleProductPress(item)}>
      <Image source={{uri: item.urunResmi}} style={styles.productImage} />
      <View style={styles.productInfoContainer}>
        <Text style={styles.productName}>{item.urunAdi}</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.detailButton}
            onPress={() => handleProductPress(item)}>
            <Text style={styles.addButtonLabel}>Detay</Text>
          </TouchableOpacity>
          <View style={styles.quantityContainer}>
            <TouchableOpacity
              style={styles.quantityButton}
              onPress={() => handleDecreaseQuantity(item)}>
              <Text style={styles.quantityButtonText}>-</Text>
            </TouchableOpacity>
            <Text style={styles.quantityText}>{item.quantity}</Text>
            <TouchableOpacity
              style={styles.quantityButton}
              onPress={() => handleIncreaseQuantity(item)}>
              <Text style={styles.quantityButtonText}>+</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={styles.addButton}
            onPress={() => handleRemoveToCart(item)}>
            <Text style={styles.addButtonLabel}>Sepetten Çıkar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
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

        {isCartEmpty ? (
          <View style={styles.emptyCartContainer}>
            <Text style={styles.emptyCartText}>
            Sepetinizde ürün bulunmamaktadır. 
            </Text>
            <Text style={styles.emptyCartText}>
              Ürün eklemek için lüften kategoriler sayfasına geçiş yapın.
            </Text>
          </View>
          
        ) : (
          <View style={styles.container}>
            <FlatList
              data={cart}
              keyExtractor={item => item.id}
              renderItem={renderProductItem}
            />
          </View>
        )}

        <View style={{alignItems: 'center', justifyContent: 'center'}}></View>

        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => saveOrdersToDatabase(cart)}>
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
  container: {
    flex: 1,
    padding: 10,
  },

  loginButton: {
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  productContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  productImage: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
    borderRadius: 8,
    marginRight: 16,
  },
  productInfoContainer: {
    flex: 1,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  addButton: {
    backgroundColor: '#FF6F00',
    borderRadius: 4,
    paddingVertical: 8,
    paddingHorizontal: 16,
    width: '50%',
  },
  detailButton: {
    backgroundColor: ColorPalette.bisque,
    borderRadius: 4,
    paddingVertical: 8,
    paddingHorizontal: 16,
    width: '27%',
  },
  addButtonLabel: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 14,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityButton: {
    backgroundColor: ColorPalette.bisque,
    borderRadius: 4,
    paddingVertical: 4,
    paddingHorizontal: 4,
    marginHorizontal: 4,
  },
  quantityButtonText: {
    color: '#8b008b',
    fontWeight: 'bold',
    fontSize: 18,
  },
  quantityText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  emptyCartContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
    margin: 20
  },
  emptyCartText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: ColorPalette.whiteSmoke,
    textAlign: 'center'
  },
});

export default Cart;
