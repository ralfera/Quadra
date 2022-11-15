import { StyleSheet } from 'react-native';
import { theme } from '../../theme';

export const styles = StyleSheet.create({
  container: (props) => {
    return {
      alignSelf: props ? 'stretch' : 'flex-start',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
      padding: 12,
      borderRadius: 8,
    }
  },
  color: (color) => {
    const bgColor = color ? color : theme.colors.primary;
    return {
      backgroundColor: bgColor
    }
  },
  text: (props) => ({
    color: theme.colors.white,
    fontFamily: theme.font.light,
    marginLeft: props ? 18 : 0
  })

});