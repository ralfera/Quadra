import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MaterialCommunityIcons } from "@expo/vector-icons"

const { Navigator, Screen } = createNativeStackNavigator();
import PlayRoutes from './play.routes';

import { Login } from '../screens/Login/'
import { Home } from '../screens/Home'
import { Create } from '../screens/Create';
import { CreateScore } from '../screens/CreateScore'

import { theme } from '../theme';
import { TouchableOpacity } from 'react-native';



export function AppRoutes(props) {


  return (

    <Navigator
      initialRouteName='home'
      // screenOptions={{ headerShown: false }}
      screenOptions={({ routes, navigation, ...rest }) => {
        return (
          {
            headerShown: true,
            headerTitleStyle: { fontFamily: theme.font.light, color: theme.colors.white, backgroundColor: 'red' },
            headerStyle: {
              backgroundColor: theme.colors.primary
            },
            headerTitleAlign: 'center',
            headerLeft: () => {
              return (
                <TouchableOpacity onPress={() => navigation.goBack()} >
                  <MaterialCommunityIcons name="chevron-left-circle" size={30} color="white" />
                </TouchableOpacity>
              )
            },
          }
        )
      }}
    >
      <Screen
        name="home"
        options={{ headerShown: false }}
        component={Home}
      />
      <Screen
        name="playRoutes"
        options={{ headerShown: false }}
        component={PlayRoutes}
      />
      <Screen
        name="login"
        component={Login}
      />
      <Screen
        name="create"
        options={
          {
            headerTitle: 'Cadastre seu  Jogo'
          }
        }
        component={Create}
      />
      <Screen
        name="createScore"
        component={CreateScore}
        options={
          {
            headerTitle: "Registre seu Resultado"
          }
        }
      />

    </Navigator>
  );
}