import { useState } from 'react';
import { Text, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { Picker } from '@react-native-picker/picker';
import sharedStyles from '../shared.scss';
import styles from './ReportLocation.scss';
import ButtonInformation from '../../components/ButtonInformation/ButtonInformation';
import PrimaryButton from '../../components/ui/PrimaryButton';
import { ReportFormParamList } from '../../types';

type Props = NativeStackScreenProps<ReportFormParamList, 'ReportLocation'>;

const ReportLocation = ({ navigation }: Props) => {
  const [selectedLocation, setSelectedLocation] = useState();

  const nextQuestionHandler = () => {
    navigation.navigate('ReportDateTime');
  };

  const onValueChange = (item: string) => {
    setSelectedLocation(item);
  };

  return (
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
      <PrimaryButton text="Volgende" onPress={nextQuestionHandler} />
    </View>
  );
};

export default ReportLocation;
