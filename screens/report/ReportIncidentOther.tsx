import { useContext } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import Container from '../../components/ui/Container';
import Explanation from '../../components/forms/Explanation';
import Question from '../../components/forms/Question';
import InputContainer from '../../components/forms/InputContainer';
import PrimaryButton from '../../components/ui/PrimaryButton';
import TextField from '../../components/forms/TextField';
import { ReportFormParamList } from '../../types';
import { ReportFormContext } from '../../store/ReportFormContext';

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
    <Container>
      <Question>Wat voor overig type incident gaat het om?</Question>
      <Explanation>Voer het soort incident in</Explanation>
      <InputContainer>
        <TextField onChangeText={setOtherCategoryDescription} placeholder="Soort incident..." />
      </InputContainer>
      <PrimaryButton onPress={nextQuestion} text="Volgende" disabled={!isValid} />
    </Container>
  );
};

export default ReportIncidentOther;
