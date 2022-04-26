import React from 'react';
import { View, Text, Button } from 'react-native';
import styles from './Settings.scss';

const Settings = () => {
  const logOut = () => {
    console.log('logout');
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Instellingen</Text>
      <Text style={styles.header}>Berichtgeving</Text>
      <Text style={styles.text}>Push-notificaties</Text>
      <Text style={styles.header}>Veelgestelde vragen</Text>
      <Text style={styles.header}>Uw account</Text>
      <Text>Log in met office account. Voor meer vragen neem contact op met Goevaers Bouwonderneming B.V.</Text>
      <Button title="Uitloggen" onPress={logOut} />
    </View>
  );
};

export default Settings;
