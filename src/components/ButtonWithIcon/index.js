import { View, Text, TouchableOpacity } from "react-native";
import { theme } from "../../theme";

import { styles, format } from "./styles";

export function ButtonWithIcon({ icon, inactive, title, ...rest }) {
  return (
    <TouchableOpacity
      style={[styles.container, styles.inactive(inactive), theme.shadowProp]}
      {...rest}
    >
      <View>{icon}</View>
      <Text style={[format.text]}>{title}</Text>
    </TouchableOpacity>
  );
}
