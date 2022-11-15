import { Dimensions, Platform, PixelRatio } from "react-native";

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");

// based on iphone 5s's scale
const scale = SCREEN_WIDTH / 320;

export function normalize(size) {
  const newSize = size * scale;
  if (Platform.OS === "ios") {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  }
}

export const theme = {
  colors: {
    primary: "#3470bf",
    secondary: "#79acd9",
    yellow: "#d2d904",
    light_red: "#FFE0E0",
    orange: "#f2935c",
    green: "#4b5936",
    white: "#fff",
    black: "#000",
  },

  font: {
    light: "Prompt_300Light",
    regular: "Prompt_400Regular",
    semi_regular: "Prompt_500Medium",
    semi_bold: "Prompt_600SemiBold",
    bold: "Prompt_800ExtraBold",
    strong: "Prompt_900Black",
  },

  fontSize: {
    xs: normalize(8),
    sm: normalize(12),
    md: normalize(16),
    lg: normalize(24),
    score: normalize(42),
  },

  shadowProp: {
    shadowColor: "#000",
    elevation: 10,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 8,
    shadowRadius: 10,
  },
};
