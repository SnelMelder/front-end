import React from 'react';
import styles from '../shared.scss';

import { Text, View } from '../../components/Themed';

const ReportCategory = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Soort incident</Text>
    </View>
  );
};

export default ReportCategory;
