import React from 'react';
import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import styles from './Notifications.scss';

const Notifications = () => (
  // Need to get notifications and do if rendering

  <View style={styles.container}>
    <Text style={styles.title}>Uw gemaakte meldingen</Text>
    <View style={styles.notificationContainer}>
      <View style={styles.icon}>
        <Ionicons name="notifications" size={26} />
        <Text style={styles.subTitle}>Geen Meldingen</Text>
      </View>
      <Text style={styles.text}>Voeg een melding toe door op het plusje te tikken.</Text>
    </View>
  </View>
);
export default Notifications;
