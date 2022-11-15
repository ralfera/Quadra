import { StyleSheet } from 'react-native';
import { theme } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    margin: 4,
    height: '100%'
  },
  emptyWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    borderWidth: 2,
    borderColor: theme.colors.primary,
    borderStyle: 'dotted',
    height: 60,
    width: 60
  },
  imageWrapper: (size) => {
    return {
      height: size ? size : 45,
      width: size ? size : 45,
      borderRadius: 50,
    }
  }
});