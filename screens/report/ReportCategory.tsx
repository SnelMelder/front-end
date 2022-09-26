import { Text, View } from 'react-native';

import styles from '../shared.scss';
import SoortIncident from '../../components/SoortIncident/SoortIncident';
import ButtonInformation from '../../components/ButtonInformation/ButtonInformation';

const ReportCategory = () => (
  <View style={styles.container}>
    <View style={styles.title_container}>
      <Text style={styles.title}>Soort incident</Text>
      <ButtonInformation title="Soort incident" text="De soort incident waar u uw probleem heeft gevonden." />
    </View>
    <SoortIncident />
  </View>
);

export default ReportCategory;
