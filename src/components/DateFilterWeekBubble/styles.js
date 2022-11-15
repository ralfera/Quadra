import { StyleSheet } from 'react-native';
import { theme } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: -10
  },
  wrapper: {
    backgroundColor: theme.colors.primary,
    marginHorizontal: 5,
    borderRadius: 50,
    height: 55,
    width: 55,
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
    fontFamily: theme.font.light,
    color: theme.colors.white
  }
});