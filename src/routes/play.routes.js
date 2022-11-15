import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Play } from '../screens/Play'
import { MyGames } from '../screens/MyGames'
import { theme } from '../theme'
import { TouchableOpacity } from 'react-native';

export default function PlayRoutes() {

  const { Navigator, Screen } = createBottomTabNavigator()

  const Icons = {
    play: {
      label: 'radar',
      lib: MaterialCommunityIcons
    },
    myGames: {
      lib: MaterialCommunityIcons,
      label: 'gamepad-square'
    }
  }

  return (
    <Navigator
      initialRouteName='myGames'
      screenOptions={({ route, navigation }) => {
        return (
          {
            tabBarStyle: {
              height: 50
            },
            headerStyle: {
              backgroundColor: theme.colors.primary,
            },
            headerLeftContainerStyle: {
              paddingLeft: 18
            },
            headerLeft: () => {
              return (
                <TouchableOpacity onPress={() => navigation.navigate('home')} >
                  <MaterialCommunityIcons name="chevron-left-circle" size={30} color="white" />
                </TouchableOpacity>
              )
            },
            headerTitleAlign: 'center',
            headerTitle: 'Lobby de Partidas',
            headerTitleStyle: {
              fontFamily: theme.font.light,
              color: theme.colors.white
            },
            tabBarActiveTintColor: theme.colors.secondary,
            tabBarLabelStyle: {
              fontSize: 16,
            },
            tabBarIcon: ({ color, size, focused }) => {
              const { lib: Icon, label } = Icons[route.name]
              return <Icon name={label} color={color} size={30} />
            }
          }
        )
      }}
    >
      <Screen
        name='myGames'
        component={MyGames}
        options={{
          tabBarLabel: "Meus Jogos"
        }}
      />
      <Screen
        name='play'
        component={Play}
        options={{
          tabBarLabel: "Jogos Disponíveis"
        }}
      />
    </Navigator>
  )
}