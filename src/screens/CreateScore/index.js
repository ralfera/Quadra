import { ImageBackground, Switch, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import MyText from "../../components/MyText";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import PadelCourtImg from "../../../assets/padel-court.jpg";

import { Button } from "../../components/Button";
import { theme } from "../../theme";
import { styles } from "./styles";
import MatchCard from "../../components/MatchCard";
import MatchResultCard from "../../components/MatchResultCard";

export function CreateScore() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ marginHorizontal: 18 }}>
        <View style={styles.two_col}>
          <View style={styles.input}>
            <MaterialIcons style={styles.inputIcon} name="gamepad" size={30} />
            <MyText style={styles.inputText}>Escolha o Jogo</MyText>
          </View>
          {/*  */}
          <View style={styles.input}>
            <MaterialIcons
              style={styles.inputIcon}
              name="calendar-today"
              size={30}
            />
            <MyText style={styles.inputText}>Selecione a Data</MyText>
          </View>
        </View>
        {/*  */}
        <View style={styles.club}>
          <View style={styles.input}>
            <MaterialIcons style={styles.inputIcon} name="place" size={30} />
            <MyText style={styles.inputText}>Informe o Local da Partida</MyText>
          </View>
        </View>
        {/*  */}
        <View style={styles.single}>
          <View style={styles.input}>
            <MaterialIcons
              style={styles.inputIcon}
              name="person-pin"
              size={30}
            />
            <MyText style={styles.inputText}>Quantidade Jogadores</MyText>
          </View>
        </View>
      </View>
      <View style={styles.details}>
        <MyText style={styles.title}>
          Detalhes do Jogo:
          <MyText style={styles.subTitle}>
            Informe o resultado da partida
          </MyText>
        </MyText>
        <ImageBackground style={styles.matchScore} source={PadelCourtImg}>
          <MatchResultCard />
        </ImageBackground>

        <View style={styles.footer}>
          <Button
            label="Cadastrar Partida"
            color={theme.colors.secondary}
            icon={<MaterialIcons name="save" size={24} color="white" />}
            fullWidth
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
