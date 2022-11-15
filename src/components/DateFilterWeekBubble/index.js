import { TouchableOpacity, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { theme } from '../../theme';
import MyText from '../MyText';
import { styles } from './styles';

var enumerateDaysBetweenDates = function (startDate, endDate) {
  var now = startDate, dates = [];
  const options = { year: '2-digit', weekday: 'short', month: '2-digit', day: 'numeric' };

  while (now <= endDate) {
    dates.push(`${now.getDay()} ${now.getDate()}/${now.getMonth() + 1}`);
    now.setDate(now.getDate() + 1);
  }
  return dates;
};



export function DateFilterWeekBubble({ children, props, ...rest }) {

  var from = new Date();
  var to = new Date();
  to.setDate(to.getDate() + 7);

  var results = enumerateDaysBetweenDates(from, to)

  return (
    <SafeAreaView style={styles.container}>
      {
        results.map((day, index) => {
          const weekDay = ['DOM', 'SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SAB']
          const a = day.split(' ')
          return (
            (
              <TouchableOpacity key={index} style={[styles.wrapper]} {...rest}>
                <MyText style={styles.text}>{weekDay[a[0]]}</MyText>
                <MyText style={styles.text}>{a[1]}</MyText>
              </TouchableOpacity >
            )
          )
        })
      }
    </SafeAreaView>
  );
}