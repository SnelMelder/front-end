import { useContext } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ReportFormParamList } from '../../types';
import Container from '../../components/ui/Container';
import PrimaryButton from '../../components/ui/PrimaryButton';
import Question from '../../components/forms/Question';
import Explanation from '../../components/forms/Explanation';
import InputContainer from '../../components/forms/InputContainer';
import { ReportFormContext } from '../../store/ReportFormContext';
import TextField from '../../components/forms/TextField';

type Props = NativeStackScreenProps<ReportFormParamList, 'ReportAssistanceWitness'>;

const ReportAssistanceWitness = ({ navigation }: Props) => {
  const { data, setData } = useContext(ReportFormContext);

  const nextQuestion = () => {
    navigation.navigate('ReportTypeOfDamage');
  };

  const setAssistanceWitness = (assistanceWitness: string) => {
    setData((current) => ({ ...current, assistanceWitness }));
  };

  const buttonText = data.assistanceWitness.length > 0 ? 'Volgende' : 'Overslaan';

  return (
    <Container>
      <Question>Wie was getuige van het incident of heeft hulp verleend?</Question>
      <Explanation>Vul de naam of namen in</Explanation>
      <InputContainer>
        <TextField placeholder="Namen van getuigen en hulpverleners..." onChangeText={setAssistanceWitness} />
      </InputContainer>
      <PrimaryButton text={buttonText} onPress={nextQuestion} />
    </Container>
  );
};

export default ReportAssistanceWitness;
