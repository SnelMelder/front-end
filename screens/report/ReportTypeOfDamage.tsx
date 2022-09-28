import { Text, View } from 'react-native';
import styles from '../shared.scss';
import SoortSchade from '../../components/SoortSchade/SoortSchade';
import ButtonInformation from '../../components/ButtonInformation/ButtonInformation';

const ReportTypeOfDamage = () => (
  <View style={styles.container}>
    <View style={styles.title_container}>
      <Text style={styles.title}>Soort schade</Text>
      <ButtonInformation title="Soort schade" text="De soort schade waar u uw probleem heeft gevonden." />
    </View>
    <SoortSchade />
  </View>
);

export default ReportTypeOfDamage;
