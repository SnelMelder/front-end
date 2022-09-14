import React from 'react';
import sharedStyles from '../shared.scss';

import { Text, View } from '../../components/Themed';
import ButtonInformation from '../../components/ButtonInformation/ButtonInformation';

const ReportDateTime = () => (
  <View style={sharedStyles.container}>
    <View style={{ flexDirection: 'row' }}>
      <Text style={sharedStyles.title}>Datum & tijd</Text>
      <ButtonInformation title="Datum & tijd" text="De datum en tijd waarop het ongeval plaats heeft gevonden." />
    </View>
    {/* TODO: Add DateTime picker */}
  </View>
);

export default ReportDateTime;
