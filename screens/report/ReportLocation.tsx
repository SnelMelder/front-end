import { useContext } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ReportFormParamList } from '../../types';
import { ReportFormContext } from '../../store/ReportFormContext';
import Select from '../../components/forms/Select';
import FormQuestion from '../../components/forms/FormQuestion';

type Props = NativeStackScreenProps<ReportFormParamList, 'ReportLocation'>;

const locations = ['Locatie A', 'Locatie B', 'Locatie C', 'Locatie D', 'Locatie E'];

const ReportLocation = ({ navigation }: Props) => {
  const { data, setData } = useContext(ReportFormContext);

  const nextQuestion = () => {
    navigation.navigate('ReportDateTime');
  };

  const setSelectedLocation = (selectedLocation: string) => {
    setData((current) => ({ ...current, location: selectedLocation }));
  };

  return (
    <FormQuestion
      question="Wat is de locatie van het incident?"
      explanation="Tik één locatie aan"
      canSubmit={data.location !== undefined}
      onNextQuestion={nextQuestion}
    >
      <Select options={locations} onValueChange={setSelectedLocation} value={data.location} />
    </FormQuestion>
  );
};

export default ReportLocation;
