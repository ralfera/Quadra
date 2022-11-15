import { StyleSheet } from 'react-native';
import { theme } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 18
  },
  header: {
    marginVertical: 18,
  },
  content: {
    flex: 1,
  },
  myGames: {
    justifyContent: 'flex-start',
  },
  myResults: {
    alignItems: 'center',
    marginLeft: -12
  },
  subtitle: {
    fontFamily: theme.font.light
  }

});