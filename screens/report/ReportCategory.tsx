import { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import PrimaryButton from '../../components/ui/PrimaryButton';
import { ReportFormParamList, Category, MultiSelectOptionPropType } from '../../types';
import MultiSelect from '../../components/forms/MultiSelect';
import COLORS from '../../constants/Colors';
import { ReportFormContext } from '../../store/ReportFormContext';
import Container from '../../components/ui/Container';
import Question from '../../components/forms/Question';
import Explanation from '../../components/forms/Explanation';
import InputContainer from '../../components/forms/InputContainer';

const accidentImage = require('../../assets/images/soort-incident/soort_incident_ongeval.png');
const almostAccidentImage = require('../../assets/images/soort-incident/soort_incident_bijna_ongeval.png');
const dangerousSituationImage = require('../../assets/images/soort-incident/soort_incident_gev_sit.png');
const dangerousActionImage = require('../../assets/images/soort-incident/soort_incident_gev_han.png');
const othersImage = require('../../assets/images/soort-incident/soort_incident_overig.png');

const answeringOptions: MultiSelectOptionPropType<Category>[] = [
  {
    id: Math.random(),
    name: 'ongeval',
    label: 'Ongeval',
    image: accidentImage,
    backgroundColor: COLORS.orange,
  },
  {
    id: Math.random(),
    name: 'bijna-ongeval',
    label: 'Bijna ongeval',
    image: almostAccidentImage,
    backgroundColor: COLORS.yellow,
  },
  {
    id: Math.random(),
    name: 'gevaarlijke-situatie',
    label: 'Gevaarlijke situatie',
    image: dangerousSituationImage,
    backgroundColor: COLORS.cyan,
  },
  {
    id: Math.random(),
    name: 'gevaarlijke-handeling',
    label: 'Gevaarlijke handeling',
    image: dangerousActionImage,
    backgroundColor: COLORS.green,
  },
  {
    id: Math.random(),
    name: 'overig',
    label: 'Overig',
    image: othersImage,
    backgroundColor: COLORS.purple,
  },
];

type Props = NativeStackScreenProps<ReportFormParamList, 'ReportCategory'>;

const ReportCategory = ({ navigation }: Props) => {
  const { data, setData } = useContext(ReportFormContext);

  const setCategories = (categories: Category[]) => {
    setData((current) => ({ ...current, categories }));
  };

  const nextQuestion = () => {
    if (data.categories.includes('overig')) {
      navigation.navigate('ReportIncidentOther');
    } else {
      navigation.navigate('ReportLocation');
    }
  };

  return (
    <Container>
      <Question>Wat voor soort incident gaat het om?</Question>
      <Explanation>Tik één of meerdere opties aan</Explanation>
      <InputContainer style={styles.answerContainer}>
        <MultiSelect options={answeringOptions} value={data.categories} onValueChange={setCategories} />
      </InputContainer>
      <PrimaryButton text="Volgende" onPress={nextQuestion} disabled={data.categories.length === 0} />
    </Container>
  );
};

const styles = StyleSheet.create({
  answerContainer: {
    maxWidth: '70%',
  },
});

export default ReportCategory;
