import { Image, ScrollView, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './homescreen.scss';
import sharedStyles from './shared.scss';

import ButtonPlusBigGreen from '../components/ButtonPlusBigGreen/ButtonPlus';

import NotificationContainer from '../components/NotificationContainer/NotificationContainer';

const HomeScreen = () => {
  return (
    <>
      <Image style={sharedStyles.logo} source={require('../assets/images/SnelMelder_Home_Logo.png')} />
      <View style={styles.container}>
        <Text style={styles.title}>Melding op uw locatie</Text>
        <View style={styles.locationContainer}>
          <Ionicons name="location" size={20} />
          <Text style={styles.subtitle}> Fontys hogescholen Strijp-t TQ4</Text>
        </View>
        <ScrollView>
          <NotificationContainer
            title="Geen melding"
            message="Voeg een melding toe door op het plusje te tikken of verander uw locatie via de instellingen"
          />

          <View style={{ paddingBottom: 120 }}>
            <ButtonPlusBigGreen />
          </View>
        </ScrollView>
      </View>
    </>
  );
};
export default HomeScreen;
