import React from 'react';
import {TouchableOpacity, StyleSheet, View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {ColorPalette} from '../theme/ColorPalette';

interface IconButtonProps {
  iconName: string;
  text: string;
  onPress: () => void;
}

const IconButton: React.FC<IconButtonProps> = ({iconName, text, onPress}) => {
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
    backgroundColor: ColorPalette.green,
    borderRadius: 8,
    padding: 8,
    textAlign: 'center',
    width: '90%',
    margin: 12
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
    fontSize: 20,
    marginLeft: 5,
  },
});

export default IconButton;
