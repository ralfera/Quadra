import { StyleSheet } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";
import { theme } from "../../theme";

EStyleSheet.build({});

export const styles = EStyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 18,
    backgroundColor: "#f1f1f1",
  },
  welcomeHero: {
    marginTop: 18,
  },
  welcomeHeroText: {
    fontSize: theme.fontSize.lg,
    fontFamily: theme.font.semi_bold,
  },
  subWelcomeHeroText: {
    fontFamily: theme.font.light,
  },
  menuWrapper: {
    marginTop: 18,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  gamesWrapper: {
    flex: 1,
    marginTop: 18,
    paddingBottom: 18,
  },
  gamesInnerWrapper: {
    flex: 1,
    marginTop: 18,
  },
});
