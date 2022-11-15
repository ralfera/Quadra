import React from 'react';
import { Switch, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MyText from '../../components/MyText';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';


import { styles } from './styles';
import { theme } from '../../theme';
import { SmallButtonIcon } from '../../components/SmallButtonIcon';
import { Button } from '../../components/Button';

export function Create() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.two_col}>

        <View style={styles.input}>
          <MaterialIcons style={styles.inputIcon} name="gamepad" size={30} />
          <MyText style={styles.inputText}>Escolha o Jogo</MyText>
        </View>
        {/*  */}
        <View style={styles.input}>
          <MaterialIcons style={styles.inputIcon} name="calendar-today" size={30} />
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
          <MaterialIcons style={styles.inputIcon} name="person-pin" size={30} />
          <MyText style={styles.inputText}>Quantidade Jogadores</MyText>
        </View>
      </View>
      <View style={styles.details}>
        <MyText
          style={{ fontFamily: theme.font.semi_regular, fontSize: theme.fontSize.lg }}>
          Detalhes do Jogo:
        </MyText>
        {/* <View style={styles.inputWrapper}>
          <View style={styles.firstCol}>
            <Ionicons name="md-tennisball" size={30} color="blue" />
            <MyText style={styles.detailsText}>Tipo do Jogo</MyText>
          </View>
          <View style={styles.secondCol}>
            <MyText> Amigável '' </MyText>
          </View>
        </View> */}
        {/*  */}
        <View style={styles.inputWrapper}>
          <View style={styles.firstCol}>
            <MaterialIcons name="attach-money" size={30} style={styles.inputIcon} />
            <MyText style={styles.detailsText}>Preço da Quadra</MyText>
          </View>
          <View style={styles.secondCol}>
            <MyText style={styles.detailsPrice}> R$ 20,00 </MyText>
          </View>
        </View>
        {/*  */}
        <View style={styles.inputWrapper}>
          <View style={styles.firstCol}>
            <Ionicons name="bookmarks" size={30} style={styles.inputIcon} />
            <MyText style={styles.detailsText}>Quadra Reservada?</MyText>
          </View>
          <View style={styles.secondCol}>
            <Switch />
          </View>
        </View>
        {/*  */}
        <View style={styles.inputWrapper}>
          <View style={styles.firstCol}>
            <Ionicons name="eye-off" size={30} style={styles.inputIcon} />
            <MyText style={styles.detailsText}>Jogo Privado?</MyText>
          </View>
          <View style={styles.secondCol}>
            <Switch />
          </View>
        </View>
        <Button
          label="Cadastrar Partida"
          color={theme.colors.secondary}
          icon={<MaterialIcons name="save" size={24} color="white" />}
          fullWidth
        />
      </View>
    </SafeAreaView >
  );
}