import { StyleSheet } from 'react-native';
import { theme } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 18,
  },
  two_col: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 18
  },
  input: {
    padding: 12,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: theme.colors.secondary,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  inputIcon: {
    marginRight: 12,
    color: theme.colors.primary
  },
  inputText: {
    fontFamily: theme.font.light,
    fontSize: theme.fontSize.md
  },

  club: {
    marginBottom: 18,
  },
  single: {
    marginBottom: 18,
  },
  details: {
    flex: 1,
    justifyContent: 'space-between',
    marginBottom: 18
  },
  inputWrapper: {
    marginVertical: 18,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  firstCol: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  secondCol: {
    alignSelf: 'center',
  },
  detailsText: {
    fontFamily: theme.font.semi_regular,
  },
  detailsPrice: {
    fontSize: theme.fontSize.lg,
    fontFamily: theme.font.semi_regular
  }
});