import { useContext } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ReportFormParamList } from '../../types';
import { ReportFormContext } from '../../store/ReportFormContext';
import TextField from '../../components/forms/TextField';
import FormQuestion from '../../components/forms/FormQuestion';

type Props = NativeStackScreenProps<ReportFormParamList, 'ReportAssistanceWitness'>;

const ReportAssistanceWitness = ({ navigation }: Props) => {
  const { data, setData } = useContext(ReportFormContext);

  const nextQuestion = () => {
    navigation.navigate('ReportTypeOfDamage');
  };

  const setAssistanceWitness = (assistanceWitness: string) => {
    setData((current) => ({ ...current, assistanceWitness }));
  };

  return (
    <FormQuestion
      question="Wie was getuige van het incident of heeft hulp verleend?"
      explanation="Vul de naam of namen in"
      onNextQuestion={nextQuestion}
      canSubmit={data.assistanceWitness.length > 0}
      canSkip
    >
      <TextField placeholder="Namen van getuigen en hulpverleners..." onChangeText={setAssistanceWitness} />
    </FormQuestion>
  );
};

export default ReportAssistanceWitness;
