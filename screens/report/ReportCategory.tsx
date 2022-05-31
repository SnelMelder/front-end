import React from 'react';
import styles from '../shared.scss';
import SoortIncident from '../../components/SoortIncident/SoortIncident';

import { Text, View } from '../../components/Themed';

const ReportCategory = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Soort incident</Text>
      <SoortIncident />
    </View>
  );
};

export default ReportCategory;
