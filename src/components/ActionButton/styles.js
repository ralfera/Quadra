import { StyleSheet } from 'react-native';
import { theme } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.primary,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderRadius: 8,
    position: 'absolute',
    bottom: 0,
    left: 0,
    marginBottom: 12
  },
  text: {
    fontFamily: theme.font.light,
    color: theme.colors.white,
    marginLeft: 12
  }
});