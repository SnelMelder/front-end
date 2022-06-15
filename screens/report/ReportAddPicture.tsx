import React from 'react';
import styles from '../shared.scss';

import { Text, View } from '../../components/Themed';
import ButtonInformation from '../../components/ButtonInformation/ButtonInformation';

const ReportAddPicture = () => {
  return (
    <View style={styles.container}>
      <View style={styles.title_container}>
        <Text style={styles.title}>Voeg een foto toe</Text>
        <ButtonInformation title="Voeg een foto toe" text="De foto waar u uw probleem heeft gevonden." />
      </View>
    </View>
  );
};

export default ReportAddPicture;
