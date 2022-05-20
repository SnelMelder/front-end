import React from 'react';
import styles from '../shared.scss';
import DateTime from '../../components/DateTime/DateTime';

import { Text, View } from '../../components/Themed';

const ReportDateTime = () => {
  return (
    <View style={styles.container}>
      <DateTime />
    </View>
  );
};

export default ReportDateTime;
