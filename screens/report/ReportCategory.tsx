import { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ReportFormParamList, Category, MultiSelectOptionPropType } from '../../types';
import MultiSelect from '../../components/forms/MultiSelect';
import COLORS from '../../constants/Colors';
import { ReportFormContext } from '../../store/ReportFormContext';
import FormQuestion from '../../components/forms/FormQuestion';

const accidentImage = require('../../assets/images/soort-incident/soort_incident_ongeval.png');
const almostAccidentImage = require('../../assets/images/soort-incident/soort_incident_bijna_ongeval.png');
const dangerousSituationImage = require('../../assets/images/soort-incident/soort_incident_gev_sit.png');
const dangerousActionImage = require('../../assets/images/soort-incident/soort_incident_gev_han.png');
const othersImage = require('../../assets/images/soort-incident/soort_incident_overig.png');

const answeringOptions: MultiSelectOptionPropType<Category>[] = [
  {
    id: Math.random(),
    name: 'Ongeval',
    label: 'Ongeval',
    image: accidentImage,
    backgroundColor: COLORS.orange,
  },
  {
    id: Math.random(),
    name: 'Bijna ongeval',
    label: 'Bijna ongeval',
    image: almostAccidentImage,
    backgroundColor: COLORS.yellow,
  },
  {
    id: Math.random(),
    name: 'Gevaarlijke situatie',
    label: 'Gevaarlijke situatie',
    image: dangerousSituationImage,
    backgroundColor: COLORS.cyan,
  },
  {
    id: Math.random(),
    name: 'Gevaarlijke handeling',
    label: 'Gevaarlijke handeling',
    image: dangerousActionImage,
    backgroundColor: COLORS.green,
  },
  {
    id: Math.random(),
    name: 'Overig',
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
    if (data.categories.includes('Overig')) {
      navigation.navigate('ReportIncidentOther');
    } else {
      navigation.navigate('ReportLocation');
    }
  };

  return (
    <FormQuestion
      question="Wat voor soort incident gaat het om?"
      explanation="Tik één of meerdere opties aan"
      onNextQuestion={nextQuestion}
      canSubmit={data.categories.length > 0}
    >
      <MultiSelect
        style={styles.multiSelect}
        options={answeringOptions}
        value={data.categories}
        onValueChange={setCategories}
      />
    </FormQuestion>
  );
};

const styles = StyleSheet.create({
  multiSelect: {
    maxWidth: '70%',
  },
});

export default ReportCategory;
