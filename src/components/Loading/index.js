import { ActivityIndicator, View } from 'react-native';
import { theme } from '../../theme'

import { styles } from './styles';

export function Loading() {
  return (
    <View style={styles.container}>
      <ActivityIndicator color={theme.colors.primary} />
    </View>
  );
}