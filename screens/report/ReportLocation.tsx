import React, { useState } from 'react';
import { Picker } from '@react-native-picker/picker';
import sharedStyles from '../shared.scss';
import styles from './ReportLocation.scss';
import { Text, View } from '../../components/Themed';
import ButtonInformation from '../../components/ButtonInformation/ButtonInformation';

const ReportLocation = () => {
  const [selectedLocation, setSelectedLocation] = useState();

  const onValueChange = (item: string) => {
    setSelectedLocation(item);
  };

  return (
    <>
    
    <View style={sharedStyles.container}>
      <View style={{ flexDirection: 'row' }}>
        <Text style={styles.title}>Locatie</Text>
        <ButtonInformation />
      </View>
      <Picker
        selectedValue={selectedLocation}
        onValueChange={onValueChange}
        style={{ height: 50, width: 350, marginTop: 100 }}
      >
        <Picker.Item label="Selecteer een locatie" value="" />
        <Picker.Item label="Strijp TQ" value="strijp-tq" />
        <Picker.Item label="Strijp S" value="strijp-s" />
        <Picker.Item label="Rachelsmolen" value="rachelsmolen" />
      </Picker>
    </View>
    
    </>
  );
};

export default ReportLocation;
