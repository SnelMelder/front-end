import { useContext } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ReportFormContext } from '../../store/ReportFormContext';
import { ReportFormParamList } from '../../types';
import TextField from '../../components/forms/TextField';
import FormQuestion from '../../components/forms/FormQuestion';

type Props = NativeStackScreenProps<ReportFormParamList, 'ReportAdditionalInformation'>;

const ReportAdditionalInformation = ({ navigation }: Props) => {
  const { data, setData } = useContext(ReportFormContext);

  const nextQuestion = () => {
    navigation.navigate('ReportSummary');
  };

  const setAdditionalInformation = (additionalInformation: string) => {
    setData((current) => ({ ...current, additionalInformation }));
  };

  return (
    <FormQuestion
      question="Wil je nog iets anders kwijt over deze melding?"
      explanation="Je kan hier nog aanvullende informatie geven. Dit is niet verplicht."
      onNextQuestion={nextQuestion}
      canSkip
      canSubmit={data.additionalInformation.length > 0}
    >
      <TextField placeholder="Aanvullende informatie..." multiline onChangeText={setAdditionalInformation} />
    </FormQuestion>
  );
};

export default ReportAdditionalInformation;
