import { StyleSheet } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";
import { theme } from "../../theme";
EStyleSheet.build({});
export const styles = EStyleSheet.create({
  container: {
    alignSelf: "stretch",
    justifyContent: "center",
    backgroundColor: "#fff",
    borderRadius: 8,
    marginVertical: 8,
    flex: 1,
  },
  wrapper: {
    flexDirection: "row",
    paddingHorizontal: 10,
  },
  players: {
    justifyContent: "space-around",
    paddingRight: 18,
  },
  team: {
    flexDirection: "row",
  },
  score: {
    flex: 1,
    alignSelf: "flex-start",
    justifyContent: "space-around",
    flexDirection: "row",
    borderLeftWidth: 1,
    borderLeftColor: "#e9e9e9",
  },
  scoreTextWinner: {
    justifyContent: "center",
  },
  scoreText: {
    fontSize: theme.fontSize.score,
    fontFamily: theme.font.strong,
    color: theme.colors.green,
  },
  inactive: {
    color: theme.colors.light_red,
  },
  details: {
    flexDirection: "row",
    justifyContent: "flex-end",
    paddingEnd: 16,
  },
  detailsTime: {
    fontSize: theme.fontSize.sm,
    fontFamily: theme.font.light,
  },
});
