import React, { useState } from 'react';
import { Image } from 'react-native';
import styles from './shared.scss';

import { Text, View } from '../components/Themed';
import Notifications from '../components/Notifications/Notifications';

const NotificationScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <Image style={styles.logo} source={require('../assets/images/SnelMelder_Home_Logo.png')} />

      <View style={styles.container}>
        <Notifications></Notifications>
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      </View>
    </>
  );
};

export default NotificationScreen;
