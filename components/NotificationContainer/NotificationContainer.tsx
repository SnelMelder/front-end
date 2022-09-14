import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import styles from './notificationcontainer.scss';

import { Text, View } from '../Themed';

const NotificationContainer = props => {
  const { title, message } = props;
  return (
    <View style={styles.notificationContainer}>
      <View style={styles.icon}>
        <Ionicons name="notifications" size={26} />
        <Text style={styles.subTitle}>{title}</Text>
      </View>
      <Text style={styles.text}>{message}</Text>
    </View>
  );
};

export default NotificationContainer;
