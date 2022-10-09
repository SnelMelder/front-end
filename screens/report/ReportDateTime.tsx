import { useContext, useEffect, useCallback } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import PrimaryButton from '../../components/ui/PrimaryButton';
import { ReportFormParamList } from '../../types';
import Container from '../../components/ui/Container';
import Question from '../../components/forms/Question';
import Explanation from '../../components/forms/Explanation';
import InputContainer from '../../components/forms/InputContainer';
import { ReportFormContext } from '../../store/ReportFormContext';
import DateTimePicker from '../../components/forms/DateTimePicker';

type Props = NativeStackScreenProps<ReportFormParamList, 'ReportDateTime'>;

const ReportDateTime = ({ navigation }: Props) => {
  const { data, setData } = useContext(ReportFormContext);

  const setSelectedDate = useCallback(
    (date: Date) => {
      setData((current) => ({ ...current, dateTime: date }));
    },
    [setData]
  );

  useEffect(() => {
    setSelectedDate(new Date(Date.now()));
  }, [setSelectedDate]);

  const nextQuestionHandler = () => {
    navigation.navigate('ReportPersonInvolved');
  };

  return (
    <Container>
      <Question>Wanneer heeft het incident plaatsgevonden?</Question>
      <Explanation>Vul datum en tijd in</Explanation>
      <InputContainer>
        <DateTimePicker value={data.dateTime} onChange={setSelectedDate} maxDate={new Date(Date.now())} />
      </InputContainer>
      <PrimaryButton text="Volgende" onPress={nextQuestionHandler} />
    </Container>
  );
};

export default ReportDateTime;
