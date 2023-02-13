import { useContext } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ReportFormParamList } from '../../types';
import TextField from '../../components/forms/TextField';
import { ReportFormContext } from '../../store/ReportFormContext';
import FormQuestion from '../../components/forms/FormQuestion';

type Props = NativeStackScreenProps<ReportFormParamList, 'ReportPersonInvolved'>;

const ReportPersonInvolved = ({ navigation }: Props) => {
  const { data, setData } = useContext(ReportFormContext);

  const nextQuestion = () => {
    navigation.navigate('ReportAssistanceWitness');
  };

  const setPersonInvolved = (personInvolved: string) => {
    setData((current) => ({ ...current, personInvolved }));
  };

  return (
    <FormQuestion
      question="Wie is er bij het incident betrokken?"
      explanation="Je kunt deze vraag overslaan"
      onNextQuestion={nextQuestion}
      canSubmit={data.personInvolved.length > 0}
      canSkip
    >
      <TextField onChangeText={setPersonInvolved} placeholder="Betrokken persoon/personen..." />
    </FormQuestion>
  );
};

export default ReportPersonInvolved;
