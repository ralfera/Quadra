import { View, Text, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome } from '@expo/vector-icons';

import loginImage from '../../../assets/login-image.png'

import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';

export function Login() {
  const { navigate } = useNavigation()

  const handleLogin = () => {
    navigate('home')
  }


  return (
    <SafeAreaView style={styles.container}>
      <Image source={loginImage} style={styles.loginImage} />
      <Text style={styles.loginText}>Cadastre-se</Text>
      <Text style={styles.subLoginText}>Encontre seu parceiro de jogo!</Text>
      <View>
        <View style={styles.buttonsWrapper}>
          <FontAwesome name="google-plus-square" size={30} color="white" />
          <Text style={styles.loginButtonText}>Entre usando sua conta Google</Text>
        </View>
        <View style={styles.buttonsWrapper}>
          <FontAwesome name="facebook-square" size={30} color="white" />
          <Text style={styles.loginButtonText} onPress={handleLogin}>Entre usando sua conta Meta</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}