import { Button, Image, ScrollView, Text, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';

import { RootStackParamList } from '../types';
import styles from './homescreen.scss';
import sharedStyles from './shared.scss';
import ButtonPlusBigGreen from '../components/ButtonPlusBigGreen/ButtonPlus';
import NotificationContainer from '../components/NotificationContainer/NotificationContainer';

type Props = NativeStackScreenProps<RootStackParamList, 'ReportForm'>;

const HomeScreen = ({ navigation }: Props) => {
  const showReportForm = () => {
    navigation.navigate('ReportForm');
  };

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

          <Button title="Open report form" onPress={showReportForm} />
        </ScrollView>
      </View>
    </>
  );
};
export default HomeScreen;
