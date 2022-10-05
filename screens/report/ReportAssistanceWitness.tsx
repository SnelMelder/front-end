import { Text, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import styles from '../shared.scss';
import ButtonInformation from '../../components/ButtonInformation/ButtonInformation';
import InputBox from '../../components/InputBox/InputBox';
import { ReportFormParamList } from '../../types';
import PrimaryButton from '../../components/ui/PrimaryButton';

type Props = NativeStackScreenProps<ReportFormParamList, 'ReportAssistanceWitness'>;

const ReportAssistanceWitness = ({ navigation }: Props) => {
  const nextQuestionHandler = () => {
    navigation.navigate('ReportTypeOfDamage');
  };

  return (
    <View style={styles.container}>
      <View style={styles.title_container}>
        <Text style={styles.title}>Hulpverlening/Getuigen</Text>
        <ButtonInformation title="Hulpverlening/Getuigen" text="De getuige waar u uw probleem heeft gevonden." />
      </View>
      <InputBox placeholder="Typ hier naam van betreffende Hulpverlener/Getuigen" />
      <PrimaryButton text="Volgende" onPress={nextQuestionHandler} />
    </View>
  );
};

export default ReportAssistanceWitness;
