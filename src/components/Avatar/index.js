import { Image, ImageBackground, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { styles } from './styles';
import { theme } from '../../theme';

export function Avatar(props) {
  return (
    <View style={styles.container}>
      {
        props.empty ?
          <View style={styles.emptyWrapper}>
            <Ionicons name="add-circle-outline" size={30} color={theme.colors.secondary} />
          </View>
          :
          <Image
            style={styles.imageWrapper(props.size)}
            source={
              { uri: 'https://artflowbucket-new.s3.amazonaws.com/generated/e6a75eed9d6a42548596889e5dc287e1.webp' }
            }
          />
      }
    </View>
  );
}