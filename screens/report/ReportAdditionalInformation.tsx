import { useContext } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ReportFormContext } from '../../store/ReportFormContext';
import PrimaryButton from '../../components/ui/PrimaryButton';
import { ReportFormParamList } from '../../types';
import Question from '../../components/forms/Question';
import Explanation from '../../components/forms/Explanation';
import Container from '../../components/ui/Container';
import TextField from '../../components/forms/TextField';
import InputContainer from '../../components/forms/InputContainer';

type Props = NativeStackScreenProps<ReportFormParamList, 'ReportAdditionalInformation'>;

const ReportAdditionalInformation = ({ navigation }: Props) => {
  const { data, setData } = useContext(ReportFormContext);

  const nextQuestion = () => {
    navigation.navigate('ReportSummary');
  };

  const setAdditionalInformation = (additionalInformation: string) => {
    setData((current) => ({ ...current, additionalInformation }));
  };

  const buttonText = data.additionalInformation.length > 0 ? 'Volgende' : 'Overslaan';

  return (
    <Container>
      <Question>Wil je nog iets anders kwijt over deze melding?</Question>
      <Explanation>Je kan hier nog aanvullende informatie geven. Dit is niet verplicht.</Explanation>
      <InputContainer>
        <TextField placeholder="Aanvullende informatie..." multiline onChangeText={setAdditionalInformation} />
      </InputContainer>
      <PrimaryButton text={buttonText} onPress={nextQuestion} />
    </Container>
  );
};

export default ReportAdditionalInformation;
