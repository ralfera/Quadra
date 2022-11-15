import React, { useState } from "react";
import { ScrollView, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { SmallButtonIcon } from "../../components/SmallButtonIcon";
import MatchCard from "../../components/MatchCard";
import { theme } from "../../theme";

import { styles } from "./styles";
import MyText from "../../components/MyText";
import { MatchLobby } from "../../components/MatchLobby";
import { ActionButton } from "../../components/ActionButton";

export function MyGames({ navigation, ...rest }) {

  const [hasGames, setHasGames] = useState(true);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.myGames}>
          <MyText style={styles.subtitle}>Jogos Escalados (3):</MyText>
          <ScrollView style={{marginLeft: -12}}horizontal showsHorizontalScrollIndicator={false}>
            <MatchLobby />
            <MatchLobby />
            <MatchLobby />
          </ScrollView>
        </View>
      </View>
      <View style={styles.content}>
        <MyText style={styles.subtitle}>Meus Últimos Resultados:</MyText>
        <View style={{ marginVertical: 12 }}>
          <SmallButtonIcon
            icon={
              <MaterialIcons
                name="date-range"
                size={25}
                color={theme.colors.white}
              />
            }
            color={theme.colors.primary}
            label="Filtro por Data"
          />
        </View>
        <ScrollView
          contentContainerStyle={styles.myResults}
          showsVerticalScrollIndicator={false}
        >
          <MatchCard />
          <MatchCard />
          <MatchCard />
          <MatchCard />
          <MatchCard />
          <MatchCard />
          <MatchCard />
          <MatchCard />
        </ScrollView>
      </View>
      <ActionButton
        label="Lançar Resultado"
        icon="scoreboard"
        onPress={() => navigation.navigate("createScore")}
      />
    </View>
  );
}
