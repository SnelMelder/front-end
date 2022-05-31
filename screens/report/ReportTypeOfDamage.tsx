import React from 'react';
import styles from '../shared.scss';
import SoortSchade from '../../components/SoortSchade/SoortSchade';

import { Text, View } from '../../components/Themed';

const ReportTypeOfDamage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Soort schade</Text> 
      <SoortSchade />
    </View>
  );
};

export default ReportTypeOfDamage;
