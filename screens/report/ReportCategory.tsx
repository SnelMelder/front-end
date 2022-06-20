import React from 'react';
import styles from '../shared.scss';
import SoortIncident from '../../components/SoortIncident/SoortIncident';

import { Text, View } from '../../components/Themed';
import ButtonInformation from '../../components/ButtonInformation/ButtonInformation';

const ReportCategory = () => {
  return (
    <View style={styles.container}>
      <View style={styles.title_container}>
        <Text style={styles.title}>Soort incident</Text>
        <ButtonInformation title="Soort incident" text="De soort incident waar u uw probleem heeft gevonden." />
      </View>
      <SoortIncident />
    </View>
  );
};

export default ReportCategory;
