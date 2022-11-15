import { StyleSheet } from 'react-native';
import { theme } from '../../theme'


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginVertical: 36
  },

  loginText: {
    fontSize: theme.fontSize.lg,
    fontFamily: theme.font.strong
  },

  subLoginText: {
    fontSize: theme.fontSize.md,
    fontFamily: theme.font.light
  },

  buttonsWrapper: {
    height: 45,
    width: 300,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 8,
    paddingHorizontal: 8,
    backgroundColor: theme.colors.primary,
    marginVertical: 8
  },

  loginButtonText: {
    fontFamily: theme.font.regular,
    fontSize: theme.fontSize.md,
    color: theme.colors.white

  }

});