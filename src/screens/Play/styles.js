import { StyleSheet } from 'react-native';
import { theme } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 14,
  },
  header: {
    marginTop: -20,
  },
  dateContainer: {
    marginTop: -10,
  },
  filter: {
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  content: {
    flex: 1,
    marginTop: 12,
  },
  title: {
    fontFamily: theme.font.semi_bold
  }


});