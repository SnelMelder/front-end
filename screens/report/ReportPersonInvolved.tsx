import { Text, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import styles from '../shared.scss';
import ButtonInformation from '../../components/ButtonInformation/ButtonInformation';
import InputBox from '../../components/InputBox/InputBox';
import { ReportFormParamList } from '../../types';
import PrimaryButton from '../../components/ui/PrimaryButton';

type Props = NativeStackScreenProps<ReportFormParamList, 'ReportPersonInvolved'>;

const ReportPersonInvolved = ({ navigation }: Props) => {
  const nextQuestionHandler = () => {
    navigation.navigate('ReportAssistanceWitness');
  };

  return (
    <View style={styles.container}>
      <View style={styles.title_container}>
        <Text style={styles.title}>Naam betrokkene</Text>
        <ButtonInformation title="Naam betrokkene" text="De naam van de persoon die uw probleem heeft gevonden." />
      </View>
      <InputBox placeholder="Typ hier naam betrokkene" />
      <PrimaryButton text="Volgende" onPress={nextQuestionHandler} />
    </View>
  );
};

export default ReportPersonInvolved;
