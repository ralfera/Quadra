import { View, Text } from "react-native";
import { theme } from "../../theme";

export default function MyText({ children, props, style, ...rest }) {
  return (
    <View>
      <Text {...rest} style={[{ fontFamily: theme.font.regular }, style]} >
        {children}
      </Text>
    </View>
  )
}