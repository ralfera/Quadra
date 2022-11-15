import { StyleSheet } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";
import { theme } from "../../theme";
EStyleSheet.build({});

export const styles = EStyleSheet.create({
  container: {
    flex: 1,
  },
  two_col: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 18,
  },
  input: {
    padding: 12,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: theme.colors.secondary,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  inputIcon: {
    marginRight: 12,
    color: theme.colors.primary,
  },
  inputText: {
    fontFamily: theme.font.light,
    fontSize: theme.fontSize.md,
  },

  club: {
    marginBottom: 18,
  },
  single: {
    marginBottom: 18,
  },
  details: {
    flex: 1,
    marginBottom: 18,
  },
  title: {
    padding: 18,
    fontFamily: theme.font.semi_regular,
    fontSize: theme.fontSize.lg,
  },
  subTitle: {
    fontFamily: theme.font.light,
  },
  matchScore: {
    justifyContent: "center",
    alignItems: "center",
    height: 250,
    padding: 18,
  },
  footer: {
    flex: 1,
    justifyContent: "flex-end",
    marginBottom: 18,
    marginHorizontal: 18,
  },
});
