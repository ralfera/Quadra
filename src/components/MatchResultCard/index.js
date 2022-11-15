import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  TextInputComponent,
} from "react-native";
import { Entypo } from "@expo/vector-icons";

import { Avatar } from "../Avatar";
import { styles } from "./styles";
import { theme } from "../../theme";
import MyText from "../MyText";

const data = {
  id: 1,
  date: "10/10/2022",
  start: "10:00",
  end: "12:00",
  type: "ranked",
  teams: {
    teamOne: {},
    teamTwo: {},
  },
};

const TextCustomInput = ({ name, ...props }) => {
  console.log(name);
  return (
    <TextInput
      {...props}
      style={styles.text}
      defaultValue={"0"}
      textContentType="oneTimeCode"
      keyboardType="number-pad"
    />
  );
};

const MatchResultCard = () => {
  return (
    <View style={[styles.container, theme.shadowProp]}>
      {/*  INICIO */}
      <View style={[styles.row]}>
        <View style={[styles.col, styles.centerY]}>
          <View style={[styles.row, styles.pLeft]}>
            <Avatar />
            <Avatar />
          </View>
        </View>
        <View style={[styles.col, styles.centerX, styles.centerY]}>
          <View style={[styles.row]}>
            <TextCustomInput name="teamOne" />
            <TextCustomInput />
            <TextCustomInput />
          </View>
        </View>
      </View>
      {/* FIM */}
      <View
        style={{
          borderWidth: 0.5,
          width: "45%",
          alignSelf: "center",
          borderColor: theme.colors.yellow,
        }}
      />
      {/*  INICIO */}
      <View style={[styles.row]}>
        <View style={[styles.col, styles.centerY]}>
          <View style={[styles.row, styles.pLeft]}>
            <Avatar />
            <Avatar />
          </View>
        </View>
        <View style={[styles.col, styles.centerX, styles.centerY]}>
          <View style={[styles.row]}>
            <TextInput
              style={styles.text}
              defaultValue={"0"}
              keyboardType={"number-pad"}
            />
            <TextInput
              style={styles.text}
              defaultValue={"0"}
              keyboardType={"number-pad"}
            />
            <TextInput
              style={styles.text}
              defaultValue={"0"}
              keyboardType={"number-pad"}
            />
          </View>
        </View>
      </View>
      {/* FIM */}
    </View>
  );
};

export default MatchResultCard;
