import { View, Text, TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons';

import { Avatar } from '../Avatar';
import { styles } from './styles';
import { theme } from '../../theme';

const data = {
  id: 1,
  date: '10/10/2022',
  start: '10:00',
  end: '12:00',
  type: 'ranked',
  teams: {
    teamOne: {

    },
    teamTwo: {

    }
  }
}


const MatchCard = () => {
  return (
    <TouchableOpacity style={[styles.container, theme.shadowProp]}>
      <View style={[styles.wrapper]}>
        <View style={styles.players}>
          <View style={styles.team}>
            <Avatar />
            <Avatar />
          </View>
          <View style={styles.team}>
            <Avatar />
            <Avatar />
          </View>
        </View>
        <View style={styles.score}>
          <View style={[styles.scoreTextWinner, { justifyContent: 'space-around' }]}>
            <Entypo name="medal" size={20} color="gold" />
            <Entypo name="medal" size={20} color="silver" />
          </View>
          <View style={styles.scoreTextWinner}>
            <Text style={[styles.scoreText, styles.inactive]}>2</Text>
            <Text style={styles.scoreText}>6</Text>
          </View>
          <View style={styles.scoreTextWinner}>
            <Text style={styles.scoreText}>6</Text>
            <Text style={[styles.scoreText, styles.inactive]}>2</Text>
          </View>
          <View style={styles.scoreTextWinner}>
            <Text style={styles.scoreText}>6</Text>
            <Text style={[styles.scoreText, styles.inactive]}>4</Text>
          </View>
        </View>
      </View>
      <View style={styles.details}>
        <Text style={styles.detailsTime}>10/10/22 ° 120min</Text>
      </View>
    </TouchableOpacity>
  );
}

export default MatchCard;