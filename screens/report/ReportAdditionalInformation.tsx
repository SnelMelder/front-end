import { Text, View } from 'react-native';
import styles from '../shared.scss';

import ButtonInformation from '../../components/ButtonInformation/ButtonInformation';
import InputBox from '../../components/InputBox/InputBox';

const ReportAdditionalInformation = () => (
  <View style={styles.container}>
    <View style={styles.title_container}>
      <Text style={styles.title}>Aanvullende informatie</Text>
      <ButtonInformation
        title="Aanvullende informatie"
        text="De aanvullende informatie omtrent het gevonden probleem."
      />
    </View>
    <InputBox placeholder="Typ hier uw aanvullende informatie" />
  </View>
);

export default ReportAdditionalInformation;
