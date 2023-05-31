import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Linking,
} from 'react-native';
import {ColorPalette} from '../theme/ColorPalette';
import {useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

const ProductDetails = (props: {route: any}) => {
  const {product} = props.route.params;
  const [isFavorite, setIsFavorite] = useState(false);

  const addToFavorites = () => {
    setIsFavorite(!isFavorite);

  };

  const addToCart = () => {
    // Sepete ekleme işlevi burada gerçekleştirilebilir
  };

  return (
    <View style={styles.container}>
      <Image
        source={{uri: product.urunResmi}}
        style={styles.productDetailImage}
      />
      <View style={styles.productDetailInfoContainer}>
        <Text style={styles.productDetailName}>{product.urunAdi}</Text>
        <Text style={styles.productDetailDescription}>{product.urunBilgi}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.favoriteButton}
          onPress={addToFavorites}
          >
          <Icon
            name={isFavorite ? 'favorite' : 'favorite-border'}
            size={24}
            color={isFavorite ? 'red' : 'black'}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.cartButton} onPress={addToCart}>
          <Text style={styles.buttonText}>Sepete Ekle</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  productDetailImage: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
    borderRadius: 8,
    marginBottom: 16,
  },
  productDetailInfoContainer: {
    padding: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    elevation: 4,
  },
  productDetailName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  productDetailDescription: {
    fontSize: 16,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
    paddingHorizontal: 16,
    elevation:2,
    
  },
  favoriteButton: {
    width: '20%',
    backgroundColor: 'transparent',
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
  },
  cartButton: {
    width: '80%',
    backgroundColor: ColorPalette.orange,
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ProductDetails;
