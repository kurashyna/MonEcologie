import {
  Button,
  Dimensions,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Appearance,
} from 'react-native';

export default function OOBETitle({navigation}) {
  const colorScheme = Appearance.getColorScheme();

  if (colorScheme == 'dark') {
    styles.OOBEView.backgroundColor = "#121212"
    styles.OOBETitle.color = 'white';
    styles.OOBESubTitle.color = 'white';
    styles.OOBEImg.opacity = 0.65;
  }
  return (
    <View style={styles.OOBEView}>
      <SafeAreaView style={styles.OOBEScreen}>
        <View style={styles.OOBETitleView}>
          <Text style={styles.OOBETitle}>MonEcologie</Text>
          <Text style={styles.OOBESubTitle}>Nous allons vous aider à réduire votre impact climatique</Text>
        </View>
        <Image
          style={styles.OOBEImg}
          source={require('../../assets/images/Globalwarming-amico.png')}
        />
        <Text>
          On a juste besoin de quelques informations avant de commencer.
        </Text>
        <Button
          title={'Continuer'}
          onPress={() => navigation.navigate('OOBE Form')}
        />
      </SafeAreaView>
    </View>
  );
}
const styles = StyleSheet.create({
  OOBEView: {
    backgroundColor: '#FFFFFF'
  },
  OOBEScreen: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: Dimensions.get('screen').height * 1,
  },
  OOBEImg: {
    width: 400,
    height: 400,
    resizeMode: 'stretch',
    opacity: 1,
  },
  OOBETitle: {
    fontSize: 42,
    color: 'black'
  },
  OOBESubTitle: {
    color: 'black',
  },
  OOBETitleView: {
    display: 'flex',
    alignItems: 'stretch',
  },
});
