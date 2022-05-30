import React from 'react';
import styles from '../shared.scss';

import { Text, View } from '../../components/Themed';
import InputBox from '../../components/InputBox/InputBox';

const ReportAdditionalInformation = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Aanvullende informatie</Text>
      <InputBox placeholder="Typ hier uw aanvullende informatie" />
    </View>
  );
};

export default ReportAdditionalInformation;
