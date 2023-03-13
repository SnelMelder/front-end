import { useContext, useEffect, useCallback } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ReportFormParamList } from '../../types';
import { ReportFormContext } from '../../store/ReportFormContext';
import FormQuestion from '../../components/forms/FormQuestion';
import UniversalDateTimePicker from '../../components/forms/UniversalDateTimePicker';

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
    <FormQuestion
      question="Wanneer heeft het incident plaatsgevonden?"
      explanation="Vul datum en tijd in"
      canSubmit
      onNextQuestion={nextQuestionHandler}
    >
      <UniversalDateTimePicker onChange={setSelectedDate} />
    </FormQuestion>
  );
};

export default ReportDateTime;
