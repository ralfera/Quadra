import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { theme } from '../../theme';

import { styles } from './styles';
import MyText from '../MyText';

export function ActionButton({ label, icon, ...rest }) {
  return (
    <TouchableOpacity style={[styles.container, theme.shadowProp]} {...rest}>
      <MaterialCommunityIcons name={icon} size={20} color="white" />
      <MyText style={styles.text}>{label}</MyText>
    </TouchableOpacity>
  );
}