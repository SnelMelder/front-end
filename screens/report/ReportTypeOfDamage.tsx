import React from 'react';
import styles from '../shared.scss';
import SoortIncident from '../../components/SoortIncident/SoortIncident';

import { Text, View } from '../../components/Themed';

const ReportTypeOfDamage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Soort schade</Text> 
      <SoortIncident />
    </View>
  );
};

export default ReportTypeOfDamage;
