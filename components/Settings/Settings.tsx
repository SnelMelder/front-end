import React, { useState, useContext } from 'react';
import { View, Text, Switch, TouchableOpacity } from 'react-native';
import { AuthContext } from '../../auth/AuthContext';

import Divider from '../Divider';
import ArrowIcon from './ArrowIcon';
import styles from './Settings.scss';

const Settings = () => {
  const { logout } = useContext(AuthContext);
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Instellingen</Text>

      <Text style={styles.header}>Berichtgeving</Text>

      <View style={{ flexDirection: `row`, paddingBottom: 15 }}>
        <Text style={styles.text}>Push-notificaties</Text>
        <Switch
          trackColor={{ false: '#f75a5a', true: '#83DF55' }}
          thumbColor={isEnabled ? '#52BB1D' : '#C31515'}
          ios_backgroundColor="#f75a5a"
          onValueChange={toggleSwitch}
          value={isEnabled}
          style={{ marginVertical: -5, marginLeft: 15 }}
        />
      </View>

      <Divider colorDrawer="black" heightDrawer={0.5} widthDrawer={2} />

      <Text style={styles.header}>
        Veelgestelde vragen <ArrowIcon />
      </Text>

      <Divider style={styles.divider} colorDrawer="black" heightDrawer={0.5} widthDrawer={2} />

      <Text style={styles.header}>Uw account</Text>
      <Text style={styles.text}>
        Log in met office account. Voor meer vragen neem contact op met Goevaers Bouwonderneming B.V.
      </Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={logout} style={[styles.logoutButton]}>
          <Text style={styles.textButton}>Uitloggen</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Settings;
