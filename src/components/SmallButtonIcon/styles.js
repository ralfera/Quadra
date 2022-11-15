import { StyleSheet } from 'react-native';
import { theme } from '../../theme';

export const styles = StyleSheet.create({
  container: (prop) => {
    return {
      flexDirection: 'row',
      alignSelf: prop ? 'stretch' : 'flex-start',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderRadius: 4,
      height: 45,
      paddingHorizontal: 12,
      backgroundColor: theme.colors.secondary
    }
  },
  icon: {
    marginRight: 12
  },
  text: {
    color: theme.colors.white
  }
});