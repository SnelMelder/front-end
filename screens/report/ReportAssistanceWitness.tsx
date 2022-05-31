import React from 'react';
import styles from '../shared.scss';

import { Text, View } from '../../components/Themed';
import InputBox from '../../components/InputBox/InputBox';

const ReportAssistanceWitness = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hulpverlening/Getuigen</Text>
      <InputBox placeholder="Typ hier naam van betreffende Hulpverlener/Getuigen" />
    </View>
  );
};

export default ReportAssistanceWitness;
