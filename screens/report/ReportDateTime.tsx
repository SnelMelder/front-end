import React from 'react';
import styles from '../shared.scss';
import DateTime from '../../components/DateTime/DateTime';
import sharedStyles from '../shared.scss';

import { Text, View } from '../../components/Themed';
import ButtonInformation from '../../components/ButtonInformation/ButtonInformation';

const ReportDateTime = () => {
  return (
    <View style={sharedStyles.container}>
      <View style={{ flexDirection: 'row' }}>
        <Text style={styles.title}>Datum & tijd</Text>
        <ButtonInformation title="Datum & tijd" text="De datum en tijd waarop het ongeval plaats heeft gevonden." />

      </View>
      <DateTime />
    </View>
  );
};

export default ReportDateTime;
