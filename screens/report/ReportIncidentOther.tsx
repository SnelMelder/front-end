import React from 'react';
import sharedStyles from '../shared.scss';
import styles from './ReportIncidentOther.scss';
import InputBox from '../../components/InputBox/InputBox';

import { Text, View } from '../../components/Themed';

const ReportIncidentOther = () => {
  return (
    <View style={sharedStyles.container}>
      <Text style={sharedStyles.title}>Soort incident: Overig</Text>
      <View style={styles.inputBox}>
        <InputBox placeholder="Typ hier uw omschrijving" />
      </View>
    </View>
  );
};

export default ReportIncidentOther;
