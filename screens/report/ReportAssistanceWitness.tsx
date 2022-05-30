import React from 'react';
import styles from '../shared.scss';

import { Text, View } from '../../components/Themed';
import ButtonInformation from '../../components/ButtonInformation/ButtonInformation';

const ReportAssistanceWitness = () => {
  return (
    <View style={styles.container}>
      <View style={styles.title_container}>
        <Text style={styles.title}>Hulpverlening/Getuigen</Text>
        <ButtonInformation />
      </View>
    </View>
  );
};

export default ReportAssistanceWitness;
