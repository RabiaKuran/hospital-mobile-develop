import React from 'react';
import {TouchableOpacity, StyleSheet, View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {ColorPalette} from '../theme/ColorPalette';

interface IconButtonProductProps {
  iconName: string;
  text: string;
  onPress: () => void;
}

const IconButtonProduct: React.FC<IconButtonProductProps> = ({iconName, text, onPress}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
        <View style={styles.contentContainer}>
        <Icon name={iconName} size={30} color="#FFFFFF" />
        <Text style={styles.text}>{text}</Text>
      </View>
     
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: ColorPalette.blue2,
    borderRadius: 8,
    padding: 8,
    textAlign: 'center',
    width: '95%',
    margin: 3
  },
  contentContainer: {
    flexDirection: 'row',
  
    justifyContent: 'center',
    borderRadius: 8,
    padding: 1,

    textAlign: 'center',
  },
  text: {
    color: '#FFFFFF',
    fontSize: 17,
    marginLeft: 5,
    fontWeight: "bold"
  },
});

export default IconButtonProduct;
