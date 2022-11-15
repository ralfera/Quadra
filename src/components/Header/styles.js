import { StyleSheet } from 'react-native';
import { theme } from '../../theme'


export const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
  },
  icon: {
    backgroundColor: theme.colors.secondary,
    padding: 8,
    borderRadius: 8
  }
});