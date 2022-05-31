import React from 'react';
import styles from '../shared.scss';
import DateTime from '../../components/DateTime/DateTime';
import sharedStyles from '../shared.scss';

import { Text, View } from '../../components/Themed';

const ReportDateTime = () => {
  return (
    <View style={sharedStyles.container}>
      <View style={{ flexDirection: 'row' }}>
        <Text style={styles.title}>Datum & tijd</Text>
      </View>
      <DateTime />
    </View>
  );
};

export default ReportDateTime;
