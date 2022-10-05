import { Text, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import styles from '../shared.scss';

import ButtonInformation from '../../components/ButtonInformation/ButtonInformation';
import InputBox from '../../components/InputBox/InputBox';
import PrimaryButton from '../../components/ui/PrimaryButton';
import { ReportFormParamList } from '../../types';

type Props = NativeStackScreenProps<ReportFormParamList, 'ReportAdditionalInformation'>;

const ReportAdditionalInformation = ({ navigation }: Props) => {
  const nextQuestionHandler = () => {
    navigation.navigate('ReportSummary');
  };

  return (
    <View style={styles.container}>
      <View style={styles.title_container}>
        <Text style={styles.title}>Aanvullende informatie</Text>
        <ButtonInformation
          title="Aanvullende informatie"
          text="De aanvullende informatie omtrent het gevonden probleem."
        />
      </View>
      <InputBox placeholder="Typ hier uw aanvullende informatie" />
      <PrimaryButton text="Volgende" onPress={nextQuestionHandler} />
    </View>
  );
};

export default ReportAdditionalInformation;
