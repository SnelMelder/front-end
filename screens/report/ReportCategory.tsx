import { useContext } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useForm, Controller } from 'react-hook-form';
import PrimaryButton from '../../components/ui/PrimaryButton';
import { ReportFormParamList, Category } from '../../types';
import MultiSelect from '../../components/forms/MultiSelect';
import COLORS from '../../constants/Colors';
import { ReportFormContext } from '../../store/ReportFormContext';

const accidentImage = require('../../assets/images/soort-incident/soort_incident_ongeval.png');
const almostAccidentImage = require('../../assets/images/soort-incident/soort_incident_bijna_ongeval.png');
const dangerousSituationImage = require('../../assets/images/soort-incident/soort_incident_gev_sit.png');
const dangerousActionImage = require('../../assets/images/soort-incident/soort_incident_gev_han.png');
const othersImage = require('../../assets/images/soort-incident/soort_incident_overig.png');

const answeringOptions = [
  {
    name: 'ongeval',
    label: 'Ongeval',
    image: accidentImage,
    backgroundColor: COLORS.orange,
  },
  {
    name: 'bijna-ongeval',
    label: 'Bijna ongeval',
    image: almostAccidentImage,
    backgroundColor: COLORS.yellow,
  },
  {
    name: 'gevaarlijke-situatie',
    label: 'Gevaarlijke situatie',
    image: dangerousSituationImage,
    backgroundColor: COLORS.cyan,
  },
  {
    name: 'gevaarlijke-handeling',
    label: 'Gevaarlijke handeling',
    image: dangerousActionImage,
    backgroundColor: COLORS.green,
  },
  {
    name: 'overig',
    label: 'Overig',
    image: othersImage,
    backgroundColor: COLORS.purple,
  },
];

type Props = NativeStackScreenProps<ReportFormParamList, 'ReportCategory'>;

type FormData = {
  categories: Array<Category>;
};

const ReportCategory = ({ navigation }: Props) => {
  const { setData } = useContext(ReportFormContext);
  const { control, handleSubmit } = useForm<FormData>({
    defaultValues: {
      categories: [],
    },
  });

  const onSubmit = (data: FormData) => {
    setData((oldState) => ({ ...oldState, categories: data.categories }));
    nextQuestion(data.categories);
  };

  const nextQuestion = (selectedCategories: Array<Category>) => {
    if (selectedCategories.includes('overig')) {
      navigation.navigate('ReportIncidentOther');
    } else {
      navigation.navigate('ReportLocation');
    }
  };

  return (
    <View style={styles.rootContainer}>
      <View style={styles.questionContainer}>
        <Text style={styles.explanationText}>Tik één of meerdere opties aan</Text>
        <ScrollView>
          <Controller
            control={control}
            render={({ field: { onChange, value } }) => (
              <MultiSelect value={value} onChange={onChange} answeringOptions={answeringOptions} />
            )}
            name="categories"
          />
        </ScrollView>
      </View>
      <PrimaryButton text="Volgende" onPress={handleSubmit(onSubmit)} />
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    padding: 16,
    flex: 1,
  },
  questionContainer: {
    flex: 1,
    marginBottom: 16,
    maxWidth: '70%',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  explanationText: {
    marginBottom: 16,
  },
});

export default ReportCategory;
