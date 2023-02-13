import { useContext } from 'react';
import { Text, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ReportFormParamList } from '../../types';
import Container from '../../components/ui/Container';
import PrimaryButton from '../../components/ui/PrimaryButton';
import COLORS from '../../constants/Colors';
import { ReportFormContext } from '../../store/ReportFormContext';

type Props = NativeStackScreenProps<ReportFormParamList, 'SuccessScreen'>;

const SuccessScreen = ({ navigation }: Props) => {
  const { reset } = useContext(ReportFormContext);

  const resetAndGoHome = () => {
    reset();
    navigation.replace('Root');
  };

  return (
    <Container style={styles.container}>
      <Text style={styles.title}>Melding verstuurd</Text>
      <Text style={styles.body}>Je melding is verstuurd naar de uitvoerder. Je kunt de app nu sluiten.</Text>
      <PrimaryButton text="Oké" onPress={resetAndGoHome} style={styles.button} />
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.primary500,
    padding: 32,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: COLORS.onPrimary,
  },
  body: {
    textAlign: 'center',
    color: COLORS.onPrimary,
  },
  button: {
    backgroundColor: COLORS.primary700,
    width: '100%',
    marginTop: 32,
  },
});

export default SuccessScreen;
