import React from 'react';
import sharedStyles from '../shared.scss';
import styles from './ReportLocation.scss';
import { Text, View } from '../../components/Themed';
import ButtonInformation from '../../components/ButtonInformation/ButtonInformation';

const ReportLocation = () => {
  return (
    <View style={[sharedStyles.container, styles.container]}>
      <View style={styles.hiddenSpace} />
      <Text style={[sharedStyles.title, styles.title]}>Locatie</Text>
      <View style={styles.buttonInformation}>
        <ButtonInformation />
      </View>
    </View>
  );
};

export default ReportLocation;
