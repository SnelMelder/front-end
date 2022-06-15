import React from 'react';
import styles from '../shared.scss';

import { Text, View } from '../../components/Themed';
import ButtonInformation from '../../components/ButtonInformation/ButtonInformation';

const ReportTypeOfDamage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.title_container}>
        <Text style={styles.title}>Soort schade</Text>
        <ButtonInformation title="Soort schade" text="De soort schade waar u uw probleem heeft gevonden." />
      </View>
    </View>
  );
};

export default ReportTypeOfDamage;
