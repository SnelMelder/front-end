import React from 'react';
import styles from '../shared.scss';

import { Text, View } from '../../components/Themed';
import ButtonInformation from '../../components/ButtonInformation/ButtonInformation';

const ReportLocationOfInjury = () => {
  return (
    <View style={styles.container}>
      <View style={styles.title_container}>
        <Text style={styles.title}>Plaats van het letsel</Text>
        <ButtonInformation title="Plaats van het letsel" text="De plaats waar u uw probleem heeft gevonden." />
      </View>
    </View>
  );
};

export default ReportLocationOfInjury;
