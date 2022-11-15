import { Text, TouchableOpacity } from 'react-native';

import { styles } from './styles';

export function Button({ color, label, fullWidth, icon, ...rest }) {
  return (
    <TouchableOpacity
      {...rest}
      style={[
        styles.container(fullWidth),
        styles.color(color),
      ]}>
      {icon}
      <Text style={styles.text(icon)}>{label}</Text>
    </TouchableOpacity>
  );
}