import React from 'react';
import styles from '../shared.scss';

import { Text, View } from '../../components/Themed';
import AddPhoto from '../../components/AddPhoto/AddPhoto';

const ReportAddPicture = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Voeg een foto toe</Text>

      <AddPhoto/>
      
    </View>
  );
};

export default ReportAddPicture;
