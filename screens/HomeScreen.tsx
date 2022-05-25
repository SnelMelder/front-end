import React from 'react';
import { Image, ScrollView } from 'react-native';
import { faLocation, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import styles from './homescreen.scss';
import sharedStyles from './shared.scss';


import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import ButtonPlusBigGreen from '../components/ButtonPlusBigGreen/ButtonPlus';

import NotificationContainer from '../components/NotificationContainer/NotificationContainer';
import Divider from '../components/Divider';

const HomeScreen = ({ navigation }: RootTabScreenProps<'TabHome'>) => {
  const navigate = () => navigation.navigate('Modal');
  // const navigate = () => {
  //     navigation.navigate('Root', { screen: 'TabReport' });
  // };

  return (
    <>
      <Image style={sharedStyles.logo} source={require('../assets/images/SnelMelder_Home_Logo.png')} />
      <View style={styles.container}>
        <Text style={styles.title}>Melding op uw locatie</Text>
        <View style={styles.locationContainer}>
          <FontAwesomeIcon icon={faLocationDot} size={20} />
          <Text style={styles.subtitle}> Fontys hogescholen Strijp-t TQ4</Text>
        </View>
        <ScrollView>
          <NotificationContainer
            title="Geen melding"
            message="Voeg een melding toe door op het plusje te tikken of verander uw locatie via de instellingen"
          />

          <View style={{ paddingBottom: 120 }}>
            <ButtonPlusBigGreen handle={navigate} />
          </View>
        </ScrollView>
      </View>
    </>
  );
};
export default HomeScreen;
