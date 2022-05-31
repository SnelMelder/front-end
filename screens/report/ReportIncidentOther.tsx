import React from 'react';
import sharedStyles from '../shared.scss';
import styles from './ReportIncidentOther.scss';
import InputBox from '../../components/InputBox/InputBox';

import { Text, View } from '../../components/Themed';
import ButtonInformation from '../../components/ButtonInformation/ButtonInformation';

const ReportIncidentOther = () => {
  return (
    <View style={sharedStyles.container}>
      <View style={styles.title_container}>
        <Text style={sharedStyles.title}>Soort incident: Overig</Text>
        <ButtonInformation />
      </View>
      <View style={styles.inputBox}>
        <InputBox placeholder="Typ hier uw omschrijving" />
      </View>
    </View>
  );
};

export default ReportIncidentOther;
