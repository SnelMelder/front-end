import { useContext } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import Container from '../../components/ui/Container';
import Question from '../../components/forms/Question';
import Explanation from '../../components/forms/Explanation';
import PrimaryButton from '../../components/ui/PrimaryButton';
import InputContainer from '../../components/forms/InputContainer';
import { ReportFormContext } from '../../store/ReportFormContext';
import { InjuryLocation, ReportFormParamList } from '../../types';
import InjuryLocationSelector from '../../components/forms/InjuryLocationSelector';

type Props = NativeStackScreenProps<ReportFormParamList, 'ReportLocationOfInjury'>;

const ReportLocationOfInjury = ({ navigation }: Props) => {
  const { data, setData } = useContext(ReportFormContext);

  const nextQuestion = () => {
    navigation.navigate('ReportAddPicture');
  };

  const setInjuryLocations = (injuryLocation: InjuryLocation[]) => {
    setData((current) => ({ ...current, injuryLocation }));
  };

  const isValid = data.injuryLocation.length > 0;

  return (
    <Container>
      <Question>Wat is de plaats van het letsel?</Question>
      <Explanation>Tik aan op onderstaande tekening</Explanation>
      <InputContainer>
        <InjuryLocationSelector value={data.injuryLocation} onValueChange={setInjuryLocations} />
      </InputContainer>
      <PrimaryButton onPress={nextQuestion} text="Volgende" disabled={!isValid} />
    </Container>
  );
};

export default ReportLocationOfInjury;
