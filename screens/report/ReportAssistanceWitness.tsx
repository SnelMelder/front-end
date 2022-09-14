import React from 'react';
import styles from '../shared.scss';

import { Text, View } from '../../components/Themed';
import ButtonInformation from '../../components/ButtonInformation/ButtonInformation';
import InputBox from '../../components/InputBox/InputBox';

const ReportAssistanceWitness = () => (
  <View style={styles.container}>
    <View style={styles.title_container}>
      <Text style={styles.title}>Hulpverlening/Getuigen</Text>
      <ButtonInformation title="Hulpverlening/Getuigen" text="De getuige waar u uw probleem heeft gevonden." />
    </View>
    <InputBox placeholder="Typ hier naam van betreffende Hulpverlener/Getuigen" />
  </View>
);

export default ReportAssistanceWitness;
