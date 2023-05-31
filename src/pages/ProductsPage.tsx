import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,

  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import {FlatList, ScrollView} from 'react-native-gesture-handler';
import MyButton from '../components/MyButton';
import IconButton from '../button/IconButton';
import IconButtonProduct from '../button/IconButtonProduct';
import axios from 'axios';
import {ColorPalette} from '../theme/ColorPalette';


interface IProductsPageProps {
  text?: string;

}
type Products = {
  id: string;
  urunKategori: string;
  urunAdi: string;
  urunBilgi: string;
  urunResmi: string;
};

const ProductsPage = (props: {navigation: any}) => {
  const [cart, setCart] = useState([] as any);
  console.log('cart items:', cart);
  const {navigation} = props;
  const [isLoading, setLoading] = useState(false);
  const [datas, setDatas] = useState<Products[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('Yemek Bölümü');

  const filteredProducts = datas.filter(
    item => item.urunKategori === selectedCategory,
  );

  const handlePressPersonelProducts = () => {
    setSelectedCategory('Kişisel Bölüm');
  };

  const handlePressFoodDepartment = () => {
    setSelectedCategory('Yemek Bölümü');
  };
  const handleAddToCart = (product: Products) => {
    setCart([...cart, product]);
    console.log('----------------------------------------------');
    console.log(cart);
    console.log('----------------------------------------------');
  };
  const getEmployee = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        'http://10.0.2.2:8080/api/products/getall',
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

  const handleProductPress = (product: Products) => {
    navigation.navigate('ProductDetails', {product});
  };
  const handleItemPress = (item: Products) => {
    console.log(item);
    props.navigation.navigate('Cart', {cart: cart});
    console.log("itwwwwwwwwwwwwwwmmmmmmmmmmmemmmmmmmmmmmm");
    console.log(item);
  };

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
          <TouchableOpacity
            style={styles.addButton}
            onPress={() => handleAddToCart(item)}>
            <Text style={styles.addButtonLabel}>Sepete Ekle</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 24,
            fontWeight: 'bold',
            marginTop: 15,
          }}>
          Ürünler
        </Text>
        <View style={styles.buttonContainer}>
          <ScrollView horizontal={true}>
            <TouchableOpacity
              style={{
                flex: 1,
                alignItems: 'flex-start',
                justifyContent: 'flex-start',
              }}>
              <IconButtonProduct
                iconName=""
                text="Kişisel Ürünler"
                onPress={handlePressPersonelProducts}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flex: 1,
                alignItems: 'flex-end',
                justifyContent: 'flex-start',
              }}>
              <IconButtonProduct
                iconName=""
                text="Yiyecek ve içecekler"
                onPress={handlePressFoodDepartment}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flex: 1,
                alignItems: 'flex-end',
                justifyContent: 'flex-start',
              }}>
              <IconButtonProduct
                iconName=""
                text="Diğer İstekler"
                onPress={handlePressFoodDepartment}
              />
            </TouchableOpacity>
          </ScrollView>
        </View>
        <View style={styles.container}>
          <FlatList
            data={filteredProducts}
            keyExtractor={item => item.id}
            renderItem={renderProductItem}
          />
        </View>
      </SafeAreaView>

      <TouchableOpacity
        style={styles.loginButton}
        onPress={() => navigation.navigate('Cart')}>
        <MyButton
          textTitle="Sepete git"
          backgroundColor="#000"
          onPress={() => handleItemPress(cart)}
        />
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  loginButton: {
    marginTop: 5,
    marginBottom: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },

  container: {
    flex: 1,
    padding: 10,
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
    width: '45%',
  },
  addButtonLabel: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 14,
  },
});

export default ProductsPage;
