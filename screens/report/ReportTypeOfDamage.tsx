import React from 'react';
import styles from '../shared.scss';
import SoortSchade from '../../components/SoortSchade/SoortSchade';

import { Text, View } from '../../components/Themed';
import ButtonInformation from '../../components/ButtonInformation/ButtonInformation';

const ReportTypeOfDamage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.title_container}>
        <Text style={styles.title}>Soort schade</Text>
        <ButtonInformation />
      </View>
      <SoortSchade />
    </View>
  );
};

export default ReportTypeOfDamage;
