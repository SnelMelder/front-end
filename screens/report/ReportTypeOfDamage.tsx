import { Text, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import styles from '../shared.scss';
import SoortSchade from '../../components/SoortSchade/SoortSchade';
import ButtonInformation from '../../components/ButtonInformation/ButtonInformation';
import { ReportFormParamList } from '../../types';
import PrimaryButton from '../../components/ui/PrimaryButton';

type Props = NativeStackScreenProps<ReportFormParamList, 'ReportTypeOfDamage'>;

const ReportTypeOfDamage = ({ navigation }: Props) => {
  const nextQuestionHandler = () => {
    // TODO: Navigate to correct screen based on answer
    navigation.navigate('ReportAddPicture');
  };

  return (
    <View style={styles.container}>
      <View style={styles.title_container}>
        <Text style={styles.title}>Soort schade</Text>
        <ButtonInformation title="Soort schade" text="De soort schade waar u uw probleem heeft gevonden." />
      </View>
      <SoortSchade />
      <PrimaryButton text="Volgende" onPress={nextQuestionHandler} />
    </View>
  );
};

export default ReportTypeOfDamage;
