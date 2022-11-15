import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import MyText from '../MyText';
import { Avatar } from '../Avatar';

import { theme } from '../../theme';
import { styles } from './styles';

export function MatchLobby() {
  return (
    <TouchableOpacity style={[styles.container, theme.shadowProp]}>
      <View style={styles.header}>

        <MyText style={styles.headerText}>
          <MaterialIcons name="date-range" size={12} color={theme.colors.primary} />28/10/2022
        </MyText>
        <MyText style={styles.headerText}>
          <MaterialIcons name="watch" size={12} color={theme.colors.primary} />12:00
        </MyText>
        <MyText style={{ color: "#a1a1a1", fontFamily: theme.font.light }}>Amigável</MyText>
      </View>
      <View style={styles.players}>
        <View style={styles.team}>
          <Avatar size={60} />
          <Avatar size={60} />
        </View>
        <View style={styles.team}>
          <Avatar size={60} />
          <Avatar size={60} empty />
        </View>
      </View>
      <View style={styles.footer}>
        <View style={styles.club}>
          <View style={styles.icon}>
            <MaterialIcons name="place" size={30} color="black" />
          </View>
          <View>
            <MyText style={styles.clubText}>Três Figueiras Tênis Clube</MyText>
            <MyText style={styles.clubSubText}>Rua Carlos Huber, 703 - Porto Alegre</MyText>
          </View>
        </View>
        <View style={styles.priceWrapper}>
          <MyText style={styles.price}><MyText>R$</MyText> 20,00</MyText>
          <MyText style={styles.clubSubText}>120 min</MyText>
        </View>
      </View>
    </TouchableOpacity>
  );
}