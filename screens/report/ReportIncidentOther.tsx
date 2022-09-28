import { Text, View } from 'react-native';

import sharedStyles from '../shared.scss';
import styles from './ReportIncidentOther.scss';
import InputBox from '../../components/InputBox/InputBox';
import ButtonInformation from '../../components/ButtonInformation/ButtonInformation';

const ReportIncidentOther = () => (
  <View style={sharedStyles.container}>
    <View style={styles.title_container}>
      <Text style={sharedStyles.title}>Soort incident: Overig</Text>
      <ButtonInformation title="Soort incident: Overig" text="De soort incident waar u uw probleem heeft gevonden." />
    </View>
    <View style={styles.inputBox}>
      <InputBox placeholder="Typ hier uw omschrijving" />
    </View>
  </View>
);

export default ReportIncidentOther;
