import React from 'react';
import { Image } from 'react-native';
import styles from './shared.scss';

import { View } from '../components/Themed';
import Settings from '../components/Settings/Settings';

const SettingsScreen = () => {
  return (
    <>
      <Image style={styles.logo} source={require('../assets/images/SnelMelder_Home_Logo.png')} />
      <View style={styles.container}>
        <Settings />
      </View>
    </>
  );
};

export default SettingsScreen;
