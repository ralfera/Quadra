import React from 'react';
import { Text, TouchableOpacity, View, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';


import MyText from '../../components/MyText'
import { DateFilterWeekBubble } from '../../components/DateFilterWeekBubble';
import { SmallButtonIcon } from '../../components/SmallButtonIcon';
import { styles } from './styles';
import { MatchLobby } from '../../components/MatchLobby';
import { ActionButton } from '../../components/ActionButton';



export function Play({ navigation }) {


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <MyText>Escolha uma data para jogar:</MyText>
        <ScrollView
          contentContainerStyle={styles.dateContainer}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
          <DateFilterWeekBubble />
        </ScrollView>
        <View style={styles.filter}>
          <SmallButtonIcon
            label={'Procure por tipo'}
            icon={
              <MaterialCommunityIcons name="tennis" size={24} color={'white'} />
            }
          />
          <SmallButtonIcon
            label={'Procure por data'}
            icon={
              <AntDesign name="calendar" size={24} color={'white'} />
            }
          />
        </View>
        <View style={styles.filter}>
          <SmallButtonIcon
            label={'Procure por clube'}
            icon={
              <Entypo name="location-pin" size={24} color={'white'} fullWidth />
            }
          />
        </View>
      </View>
      <View style={styles.content}>
        <MyText style={styles.title}>Jogos Abertos:</MyText>
        <ScrollView
          showsVerticalScrollIndicator={false}
        >
          <MatchLobby />
          <MatchLobby />
          <MatchLobby />
          <MatchLobby />
          <MatchLobby />
          <MatchLobby />
          <MatchLobby />
          <MatchLobby />
        </ScrollView>
      </View>
      <ActionButton icon="tennis-ball" label="Cadastrar Partida" onPress={() => navigation.navigate('create')} />
    </SafeAreaView>
  );
}