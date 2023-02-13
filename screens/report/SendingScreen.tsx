import { useEffect, useContext } from 'react';
import { StyleSheet, ActivityIndicator, Text } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ReportFormParamList } from '../../types';
import { ReportFormContext } from '../../store/ReportFormContext';
import Container from '../../components/ui/Container';
import COLORS from '../../constants/Colors';

type Props = NativeStackScreenProps<ReportFormParamList, 'SendingScreen'>;

const SendingScreen = ({ navigation }: Props) => {
  const { status } = useContext(ReportFormContext);

  useEffect(() => {
    if (status === 'success') {
      navigation.navigate('SuccessScreen');
    }
  }, [status, navigation]);

  return (
    <Container style={styles.container}>
      <ActivityIndicator size="large" color={COLORS.onPrimary} />
      <Text style={styles.text}>Bezig met versturen...</Text>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.primary500,
  },
  text: {
    color: COLORS.onPrimary,
    marginTop: 16,
  },
});

export default SendingScreen;
