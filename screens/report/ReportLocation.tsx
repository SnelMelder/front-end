import { useContext } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import PrimaryButton from '../../components/ui/PrimaryButton';
import { ReportFormParamList } from '../../types';
import { ReportFormContext } from '../../store/ReportFormContext';
import Container from '../../components/ui/Container';
import Question from '../../components/forms/Question';
import Explanation from '../../components/forms/Explanation';
import Select from '../../components/forms/Select';
import InputContainer from '../../components/forms/InputContainer';

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
    <Container>
      <Question>Wat is de locatie van het incident?</Question>
      <Explanation>Tik één locatie aan</Explanation>
      <InputContainer>
        <Select options={locations} onValueChange={setSelectedLocation} value={data.location} />
      </InputContainer>
      <PrimaryButton text="Volgende" onPress={nextQuestion} disabled={data.location === undefined} />
    </Container>
  );
};

export default ReportLocation;
