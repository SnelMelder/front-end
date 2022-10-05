import { Text, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import sharedStyles from '../shared.scss';
import ButtonInformation from '../../components/ButtonInformation/ButtonInformation';
import PrimaryButton from '../../components/ui/PrimaryButton';
import { ReportFormParamList } from '../../types';

type Props = NativeStackScreenProps<ReportFormParamList, 'ReportDateTime'>;

const ReportDateTime = ({ navigation }: Props) => {
  const nextQuestionHandler = () => {
    navigation.navigate('ReportPersonInvolved');
  };

  return (
    <View style={sharedStyles.container}>
      <View style={{ flexDirection: 'row' }}>
        <Text style={sharedStyles.title}>Datum & tijd</Text>
        <ButtonInformation title="Datum & tijd" text="De datum en tijd waarop het ongeval plaats heeft gevonden." />
      </View>
      {/* TODO: Add DateTime picker */}
      <PrimaryButton text="Volgende" onPress={nextQuestionHandler} />
    </View>
  );
};

export default ReportDateTime;
