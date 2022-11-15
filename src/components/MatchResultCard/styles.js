import { StyleSheet } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";
import { theme } from "../../theme";

EStyleSheet.build({});

export const styles = StyleSheet.create({
  container: {
    alignSelf: "stretch",
    justifyContent: "space-evenly",
    backgroundColor: "#fff",
    borderRadius: 15,
  },
  row: {
    flexDirection: "row",
  },
  col: {},
  pLeft: {
    paddingLeft: 18,
  },
  centerX: {
    flex: 1,
    alignItems: "center",
  },
  centerY: {
    justifyContent: "center",
  },
  text: {
    fontFamily: theme.font.semi_bold,
    fontSize: theme.fontSize.score,
    textAlign: "center",
    textAlignVertical: "center",
    marginHorizontal: 12,
  },
  teamOne: {
    backgroundColor: "#a1a1a1",
  },
  teamTwo: {
    backgroundColor: "#d1d1d1",
  },
  textWinner: {
    color: theme.colors.green,
  },
  textLoser: {
    color: theme.colors.light_red,
  },
});
