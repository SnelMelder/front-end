import { useContext } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import TextField from '../../components/forms/TextField';
import { ReportFormParamList } from '../../types';
import { ReportFormContext } from '../../store/ReportFormContext';
import FormQuestion from '../../components/forms/FormQuestion';

type Props = NativeStackScreenProps<ReportFormParamList, 'ReportIncidentOther'>;

const ReportIncidentOther = ({ navigation }: Props) => {
  const { data, setData } = useContext(ReportFormContext);

  const nextQuestion = () => {
    navigation.navigate('ReportLocation');
  };

  const setOtherCategoryDescription = (otherCategoryDescription: string) => {
    setData((current) => ({ ...current, otherCategoryDescription }));
  };

  const isValid = data.otherCategoryDescription.length > 0;

  return (
    <FormQuestion
      question="Wat voor overig type incident gaat het om?"
      explanation="Voer het soort incident in"
      canSubmit={isValid}
      onNextQuestion={nextQuestion}
    >
      <TextField onChangeText={setOtherCategoryDescription} placeholder="Soort incident..." />
    </FormQuestion>
  );
};

export default ReportIncidentOther;
