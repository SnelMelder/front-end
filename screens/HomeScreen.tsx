import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StyleSheet } from 'react-native';
import { FAB } from 'react-native-paper';
import { RootStackParamList } from '../types';
import LogoHeader from '../components/LogoHeader';
import Container from '../components/ui/Container';

type Props = NativeStackScreenProps<RootStackParamList, 'ReportForm'>;

const HomeScreen = ({ navigation }: Props) => {
  const showReportForm = () => {
    navigation.navigate('ReportForm');
  };

  return (
    <>
      <LogoHeader />
      <Container>
        <FAB style={styles.fab} onPress={showReportForm} icon="plus" label="Nieuwe melding" />
      </Container>
    </>
  );
};

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    bottom: 16,
    right: 16,
  },
});

export default HomeScreen;
