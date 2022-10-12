import { useContext } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ReportFormParamList } from '../../types';
import PrimaryButton from '../../components/ui/PrimaryButton';
import Container from '../../components/ui/Container';
import Explanation from '../../components/forms/Explanation';
import Question from '../../components/forms/Question';
import InputContainer from '../../components/forms/InputContainer';
import TextField from '../../components/forms/TextField';
import { ReportFormContext } from '../../store/ReportFormContext';

type Props = NativeStackScreenProps<ReportFormParamList, 'ReportPersonInvolved'>;

const ReportPersonInvolved = ({ navigation }: Props) => {
  const { data, setData } = useContext(ReportFormContext);

  const nextQuestion = () => {
    navigation.navigate('ReportAssistanceWitness');
  };

  const setPersonInvolved = (personInvolved: string) => {
    setData((current) => ({ ...current, personInvolved }));
  };

  const buttonText = data.personInvolved.length > 0 ? 'Volgende' : 'Overslaan';

  return (
    <Container>
      <Question>Wie is er bij het incident betrokken?</Question>
      <Explanation>Je kunt deze vraag overslaan</Explanation>
      <InputContainer>
        <TextField onChangeText={setPersonInvolved} placeholder="Betrokken persoon/personen..." />
      </InputContainer>
      <PrimaryButton onPress={nextQuestion} text={buttonText} />
    </Container>
  );
};

export default ReportPersonInvolved;
