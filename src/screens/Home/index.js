import { ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';


import { ButtonWithIcon } from '../../components/ButtonWithIcon';
import { Header } from '../../components/Header';

import { styles } from './styles';
import MatchCard from '../../components/MatchCard';
import { Button } from '../../components/Button';
import { useNavigation } from '@react-navigation/native';

export function Home({ navigation }) {


  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <View style={styles.welcomeHero}>
        <Text style={styles.welcomeHeroText}>Olá, Ralf!</Text>
      <Text style={styles.subWelcomeHeroText}>Você está pronto para jogar?</Text>
      </View>
      <View style={styles.menuWrapper}>
        <ButtonWithIcon
          title="Jogar"
          icon={<MaterialCommunityIcons name="soccer-field" size={60} color="white" />}
          onPress={() => navigation.navigate('playRoutes')}
        />
        <ButtonWithIcon
          inactive
          title="Grupos"
          icon={<FontAwesome name="group" size={50} color="white" />}
          onPress={() => { console.log('clicou') }}
        />
      </View>
      <View style={styles.gamesWrapper}>
        <Text style={[styles.welcomeHeroText, { fontSize: 18 }]}>Meus Últimos Resultados:</Text>
        <ScrollView
          style={styles.gamesInnerWrapper}
          contentContainerStyle={{ alignItems: 'center' }}
          showsVerticalScrollIndicator={false}
        >
          <MatchCard />
          <MatchCard />
          <MatchCard />
          <MatchCard />
          <MatchCard />
          <Button
            label={"Todas Partidas"}
            onPress={() => console.log('clicou')} />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}