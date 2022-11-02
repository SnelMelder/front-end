import { useContext, useEffect } from 'react';
import { ScrollView, StyleSheet, FlatList } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ReportFormParamList } from '../../types';
import { ReportFormContext } from '../../store/ReportFormContext';
import Container from '../../components/ui/Container';
import ImageCard from '../../components/ui/ImageCard';
import SummaryItem from '../../components/forms/SummaryItem';
import PrimaryButton from '../../components/ui/PrimaryButton';

type Props = NativeStackScreenProps<ReportFormParamList, 'ReportSummary'>;

const ReportSummary = ({ navigation }: Props) => {
  const { data, submit, status } = useContext(ReportFormContext);

  useEffect(() => {
    if (status === 'sending') {
      navigation.navigate('SendingScreen');
    }
  }, [status, navigation]);

  const categoryString = data.categories
    .map((item) => (item === 'Overig' ? `Overig: ${data.otherCategoryDescription}` : item))
    .join(', ');

  const locationString = data.location || '';
  const dateTimeString = Intl.DateTimeFormat('nl-NL', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    minute: 'numeric',
    hour: 'numeric',
  }).format(data.dateTime);
  const personInvolvedString = data.personInvolved.length > 0 ? data.personInvolved : 'Niets ingevuld';
  const assistanceWitnessString = data.assistanceWitness.length > 0 ? data.assistanceWitness : 'Niets ingevuld';
  const damageString = data.typeOfDamage.join(', ');
  const injuryLocationString = data.injuryLocation.join(', ');
  const additionalInformationString =
    data.additionalInformation.length > 0 ? data.additionalInformation : 'Niets ingevuld';

  const showInjuryLocation =
    data.typeOfDamage.includes('Inwendig letsel') || data.typeOfDamage.includes('Uitwendig letsel');

  return (
    <ScrollView>
      <Container>
        <PrimaryButton onPress={submit} text="Melding versturen" />
      </Container>

      {data.images.length > 0 && (
        <ScrollView style={styles.imageList}>
          <Container style={{ paddingTop: 0, paddingRight: 0 }}>
            <FlatList
              horizontal
              data={data.images}
              renderItem={(item) => (
                <ImageCard
                  style={styles.imageCard}
                  imageSource={item.item}
                  onPress={() => navigation.navigate('ReportAddPicture')}
                />
              )}
            />
          </Container>
        </ScrollView>
      )}

      <Container style={{ paddingTop: 0 }}>
        <SummaryItem
          onPress={() => navigation.navigate('ReportCategory')}
          title="Soort incident:"
          content={categoryString}
        />
        <SummaryItem onPress={() => navigation.navigate('ReportLocation')} title="Locatie:" content={locationString} />
        <SummaryItem
          onPress={() => navigation.navigate('ReportDateTime')}
          title="Datum en tijd:"
          content={dateTimeString}
        />
        <SummaryItem
          onPress={() => navigation.navigate('ReportPersonInvolved')}
          title="Naam betrokkene:"
          content={personInvolvedString}
        />
        <SummaryItem
          onPress={() => navigation.navigate('ReportAssistanceWitness')}
          title="Hulpverlening/getuigen:"
          content={assistanceWitnessString}
        />
        <SummaryItem onPress={() => navigation.navigate('ReportTypeOfDamage')} title="Schade:" content={damageString} />
        {showInjuryLocation && (
          <SummaryItem
            onPress={() => navigation.navigate('ReportLocationOfInjury')}
            title="Letsel:"
            content={injuryLocationString}
          />
        )}
        <SummaryItem
          onPress={() => navigation.navigate('ReportAdditionalInformation')}
          title="Aanvullende informatie:"
          content={additionalInformationString}
        />
      </Container>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  imageList: {
    marginTop: 4,
  },
  imageCard: {
    height: 200,
    width: 250,
    marginRight: 16,
  },
});

export default ReportSummary;
