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
import IconButtonProduct from '../button/IconButtonProduct';
import axios from 'axios';
import {ColorPalette} from '../theme/ColorPalette';

type Products = {
  id: string;
  urunKategori: string;
  urunAdi: string;
  urunBilgi: string;
  urunResmi: string;
  quantity?: number;
  tarih?: any;
  durum?: any;
  odaNo?: string;
  notifications?: string;
};

const ProductsPage = (props: {navigation: any}) => {
  const [cart, setCart] = useState([] as any);
  console.log('cart', cart);
  const {navigation} = props;
  const [isLoading, setLoading] = useState(false);
  const [datas, setDatas] = useState<Products[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('Yemek Bölümü');
  const currentDate = new Date();
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  };
  const formattedDate = currentDate.toLocaleDateString('tr-TR', options);

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
    const existingProduct = cart.find((item: Products) => item.id === product.id);
    if (existingProduct) {
      existingProduct.quantity += 1; // Ürün zaten sepette varsa miktarı artır
    
      
      setCart([...cart]);
    } else {
      product.quantity = 1; // Yeni ürünse miktarı 1 olarak ayarla
      product.tarih = formattedDate
      product.durum = "Onaylanmadı"
      product.odaNo= "A-308"
      product.notifications="Not eklenmedi"
      setCart([...cart, product]);
    }
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
        
        onPress={() => navigation.navigate('Cart', cart)}>
        <MyButton
          textTitle="Sepete git"
          backgroundColor="#000"
        
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
