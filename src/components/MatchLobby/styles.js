import { StyleSheet } from 'react-native';
import { theme } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.white,
    height: 170,
    borderRadius: 10,
    borderColor: theme.colors.yellow,
    overflow: 'hidden',
    marginVertical: 12,
    marginHorizontal: 8
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    // backgroundColor: '#f1f1f1'
    backgroundColor: theme.colors.yellow
  },
  headerText: {
    fontFamily: theme.font.semi_regular,
    color: theme.colors.primary
  },
  players: {
    flexDirection: 'row',
    justifyContent: "space-around",
    alignItems: 'center',
    flex: 1.5,
  },
  team: {
    flexDirection: 'row'
  },
  footer: {
    borderTopWidth: 0.5,
    borderColor: theme.colors.yellow,
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1
  },
  club: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 5
  },
  icon: {

  },
  clubText: {
    fontFamily: theme.font.semi_bold,
    fontSize: 14
  },
  clubSubText: {
    fontSize: 12
  },
  priceWrapper: {
    backgroundColor: theme.colors.yellow,
    paddingHorizontal: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  price: {
    fontSize: theme.fontSize.lg,
    fontFamily: theme.font.semi_bold
  },

});