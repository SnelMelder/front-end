import { useContext } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { ReportFormContext } from '../../store/ReportFormContext';
import { InjuryLocation, ReportFormParamList } from '../../types';
import InjuryLocationSelector from '../../components/forms/InjuryLocationSelector';
import FormQuestion from '../../components/forms/FormQuestion';

type Props = NativeStackScreenProps<ReportFormParamList, 'ReportLocationOfInjury'>;

const ReportLocationOfInjury = ({ navigation }: Props) => {
  const { data, setData } = useContext(ReportFormContext);

  const nextQuestion = () => {
    navigation.navigate('ReportAddPicture');
  };

  const setInjuryLocations = (injuryLocation: InjuryLocation[]) => {
    setData((current) => ({ ...current, injuryLocation }));
  };

  return (
    <FormQuestion
      question="Wat is de plaats van het letsel?"
      explanation="Tik aan op onderstaande tekening"
      onNextQuestion={nextQuestion}
      canSubmit={data.injuryLocation.length > 0}
    >
      <InjuryLocationSelector value={data.injuryLocation} onValueChange={setInjuryLocations} />
    </FormQuestion>
  );
};

export default ReportLocationOfInjury;
