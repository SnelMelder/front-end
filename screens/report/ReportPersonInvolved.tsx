import React from 'react';
import styles from '../shared.scss';

import { Text, View } from '../../components/Themed';
import ButtonInformation from '../../components/ButtonInformation/ButtonInformation';

const ReportPersonInvolved = () => {
  return (
    <View style={styles.container}>
      <View style={styles.title_container}>
        <Text style={styles.title}>Naam betrokkene</Text>
        <ButtonInformation />
      </View>
    </View>
  );
};

export default ReportPersonInvolved;
