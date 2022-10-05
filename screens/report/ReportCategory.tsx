import { Text, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import styles from '../shared.scss';
import SoortIncident from '../../components/SoortIncident/SoortIncident';
import ButtonInformation from '../../components/ButtonInformation/ButtonInformation';
import PrimaryButton from '../../components/ui/PrimaryButton';
import { ReportFormParamList } from '../../types';

type Props = NativeStackScreenProps<ReportFormParamList, 'ReportCategory'>;

const ReportCategory = ({ navigation }: Props) => {
  const nextQuestionHandler = () => {
    // TODO: Check which location we should go to next based on answer
    navigation.push('ReportLocation');
  };

  return (
    <View style={styles.container}>
      <View style={styles.title_container}>
        <Text style={styles.title}>Soort incident</Text>
        <ButtonInformation title="Soort incident" text="De soort incident waar u uw probleem heeft gevonden." />
      </View>
      <SoortIncident />
      <PrimaryButton text="Volgende" onPress={nextQuestionHandler} />
    </View>
  );
};

export default ReportCategory;
