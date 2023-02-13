import { useContext } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StyleSheet } from 'react-native';

import { ReportFormParamList, MultiSelectOptionPropType, TypeOfDamage } from '../../types';
import MultiSelect from '../../components/forms/MultiSelect';
import { ReportFormContext } from '../../store/ReportFormContext';
import COLORS from '../../constants/Colors';
import FormQuestion from '../../components/forms/FormQuestion';

const MilieuImg = require('../../assets/images/soort-schade/Milieu_Schade_Icon.png');
const MaterieleImg = require('../../assets/images/soort-schade/Materiele_Schade_Icon.png');
const InwendigImg = require('../../assets/images/soort-schade/Inwendig_Letsel_Icon.png');
const UitwendigImg = require('../../assets/images/soort-schade/Uitwendig_Letsel_Icon.png');
const GeenImg = require('../../assets/images/soort-schade/Geen_Schade_Letsel_Icon.png');

const options: MultiSelectOptionPropType<TypeOfDamage>[] = [
  {
    id: Math.random(),
    name: 'Milieu schade',
    image: MilieuImg,
    label: 'Milieuschade',
    backgroundColor: COLORS.green,
  },
  {
    id: Math.random(),
    name: 'Materiële schade',
    image: MaterieleImg,
    label: 'Materiële schade',
    backgroundColor: COLORS.cyan,
  },
  {
    id: Math.random(),
    name: 'Inwendig letsel',
    image: InwendigImg,
    label: 'Inwendig letsel',
    backgroundColor: COLORS.yellow,
  },
  {
    id: Math.random(),
    name: 'Uitwendig letsel',
    image: UitwendigImg,
    label: 'Uitwendig letsel',
    backgroundColor: COLORS.orange,
  },
  {
    id: Math.random(),
    name: 'Geen schade/letsel',
    image: GeenImg,
    label: 'Geen schade/letsel',
    backgroundColor: COLORS.purple,
  },
];

type Props = NativeStackScreenProps<ReportFormParamList, 'ReportTypeOfDamage'>;

const ReportTypeOfDamage = ({ navigation }: Props) => {
  const { data, setData } = useContext(ReportFormContext);

  const nextQuestion = () => {
    if (data.typeOfDamage.includes('Inwendig letsel') || data.typeOfDamage.includes('Uitwendig letsel')) {
      navigation.navigate('ReportLocationOfInjury');
    } else {
      navigation.navigate('ReportAddPicture');
    }
  };

  const setSelectedDamageTypes = (selectedTypesOfDamage: TypeOfDamage[]) => {
    let typeOfDamage = selectedTypesOfDamage;

    /** You cannot have 'no damage' and some sort of damage at the same time, we handle that here */
    if (typeOfDamage.includes('Geen schade/letsel')) {
      if (typeOfDamage[typeOfDamage.length - 1] === 'Geen schade/letsel') {
        typeOfDamage = ['Geen schade/letsel'];
      } else {
        typeOfDamage = selectedTypesOfDamage.filter((item) => item !== 'Geen schade/letsel');
      }
    }

    setData((current) => ({ ...current, typeOfDamage }));
  };

  const isValid = data.typeOfDamage.length > 0;

  return (
    <FormQuestion
      question="Wat voor soort schade is er ontstaan?"
      explanation="Je kunt meerdere antwoorden selecteren"
      onNextQuestion={nextQuestion}
      canSubmit={isValid}
    >
      <MultiSelect
        style={styles.multiSelect}
        options={options}
        onValueChange={setSelectedDamageTypes}
        value={data.typeOfDamage}
      />
    </FormQuestion>
  );
};

const styles = StyleSheet.create({
  multiSelect: {
    maxWidth: '70%',
  },
});

export default ReportTypeOfDamage;
