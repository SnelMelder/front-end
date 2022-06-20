import React from 'react';
import { View, Text } from 'react-native';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';

import styles from './Notifications.scss';

const Notifications = () => {
  //Need to get notifications and do if rendering

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Uw gemaakte meldingen</Text>
      <View style={styles.notificationContainer}>
        <View style={styles.icon}>
          <FontAwesomeIcon icon={faBell} size={26}></FontAwesomeIcon>
          <Text style={styles.subTitle}>Geen Meldingen</Text>
        </View>
        <Text style={styles.text}>Voeg een melding toe door op het plusje te tikken.</Text>
      </View>
    </View>
  );
};

export default Notifications;
