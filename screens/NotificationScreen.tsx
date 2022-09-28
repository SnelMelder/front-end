import React from 'react';
import { Image, View } from 'react-native';
import styles from './shared.scss';
import Notifications from '../components/Notifications/Notifications';

const NotificationScreen = () => {
  return (
    <>
      <Image style={styles.logo} source={require('../assets/images/SnelMelder_Home_Logo.png')} />

      <View style={styles.container}>
        <Notifications />
        <View style={styles.separator} />
      </View>
    </>
  );
};

export default NotificationScreen;
