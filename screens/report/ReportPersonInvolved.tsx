import { Text, View } from 'react-native';

import styles from '../shared.scss';
import ButtonInformation from '../../components/ButtonInformation/ButtonInformation';
import InputBox from '../../components/InputBox/InputBox';

const ReportPersonInvolved = () => (
  <View style={styles.container}>
    <View style={styles.title_container}>
      <Text style={styles.title}>Naam betrokkene</Text>
      <ButtonInformation title="Naam betrokkene" text="De naam van de persoon die uw probleem heeft gevonden." />
    </View>
    <InputBox placeholder="Typ hier naam betrokkene" />
  </View>
);

export default ReportPersonInvolved;
