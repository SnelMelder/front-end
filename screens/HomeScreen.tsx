import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StyleSheet, View, ScrollView } from 'react-native';
import { FAB, Text } from 'react-native-paper';
import { RootStackParamList } from '../types';
import LogoHeader from '../components/LogoHeader';
import Container from '../components/ui/Container';
import FaqItem from '../components/ui/FaqItem';


type Props = NativeStackScreenProps<RootStackParamList, 'ReportForm'>;

const HomeScreen = ({ navigation }: Props) => {
  const showReportForm = () => {
    navigation.navigate('ReportForm');
  };

  return (
    <>
      <LogoHeader />
      <ScrollView>
        <Container>
          <Text variant="headlineSmall">Welkom bij Snelmelder</Text>
          <Text variant="bodyMedium">
            Gebeurt er een ongeluk, of zie je een gevaarlijke situatie? Meld dit dan. Samen zorgen we voor een veilige
            werkomgeving.
          </Text>
          <View style={styles.faq}>
            <FaqItem
              question="Hoe maak ik een melding?"
              answer="Je kunt een melding maken door op de knop met de tekst 'Nieuwe melding' te klikken, die rechtsonderin het scherm staat."
            />
            <FaqItem
              question="Wat gebeurt er met mijn melding?"
              answer="Bij het maken van een melding selecteer je een locatie. Als je je melding afrond, dan wordt de melding eerst verstuurd naar de uitvoerder van deze locatie. Hij of zij kan dan nog een opmerking toevoegen. Vervolgens wordt de melding verstuurd naar een verzamelaar die alle meldingen verzamelt en verwerkt."
            />
            <FaqItem
              question="Kan ik ook anoniem iets melden?"
              answer="Ja. Aan het einde van het formulier kan je er voor kiezen om je melding anoniem te versturen."
            />
          </View>
        </Container>
      </ScrollView>
      <FAB style={styles.fab} onPress={showReportForm} icon="plus" label="Nieuwe melding" />
    </>
  );
};

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    bottom: 16,
    right: 16,
  },
  faq: {
    marginVertical: 16,
  },
});

export default HomeScreen;
