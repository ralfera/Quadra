import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import logo from '../../../assets/icon-h.png'
import { styles } from './styles';

export function Header() {
  return (
    <View style={styles.container}>
      <Image source={logo} />
      <TouchableOpacity>
        <FontAwesome style={styles.icon} name="gear" size={20} color="white" />
      </TouchableOpacity> 
    </View>
  );
}