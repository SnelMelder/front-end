import React from 'react';
import styles from '../shared.scss';

import { Text, View } from '../../components/Themed';
import InputBox from '../../components/InputBox/InputBox';

const ReportPersonInvolved = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Naam betrokkene</Text>
      <InputBox placeholder="Typ hier naam betrokkene" />
    </View>
  );
};

export default ReportPersonInvolved;
