import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import MyText from '../MyText';

import { styles } from './styles';

export function SmallButtonIcon({ icon, label, fullWidth, ...rest }) {
  return (
    <TouchableOpacity {...rest}>
      <View style={styles.container(fullWidth)}>
        <View style={styles.icon}>
          {icon}
        </View>
        <MyText style={styles.text}>{label}</MyText>
      </View>
    </TouchableOpacity>
  );
}