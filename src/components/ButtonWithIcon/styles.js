import { StyleSheet } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";
import { theme } from "../../theme";
EStyleSheet.build({});

export const styles = StyleSheet.create({
  container: {
    height: 100,
    width: 160,
    borderRadius: 8,
    justifyContent: "space-between",
    paddingHorizontal: 8,
  },
  inactive: (v) => {
    return {
      backgroundColor: v ? "#e2e2e2" : theme.colors.primary,
    };
  },
});

export const format = EStyleSheet.create({
  text: {
    fontFamily: theme.font.bold,
    fontSize: "1.5rem",
    color: theme.colors.white,
  },
});
console.log(format);
