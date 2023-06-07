import { useContext, useEffect } from 'react';
import { ScrollView, StyleSheet, FlatList, Switch, Text } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Button } from 'react-native-paper';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { ReportFormParamList } from '../../types';
import { ReportFormContext } from '../../store/ReportFormContext';
import Container from '../../components/ui/Container';
import ImageCard from '../../components/ui/ImageCard';
import SummaryItem from '../../components/forms/SummaryItem';
import React from 'react';

type Props = NativeStackScreenProps<ReportFormParamList, 'ReportSummary'>;

const ReportSummary = ({ navigation }: Props) => {
  const { data, submit, status } = useContext(ReportFormContext);
  const [isEnabled, setIsEnabled] = React.useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  useEffect(() => {
    if (status === 'sending') {
      navigation.navigate('SendingScreen');
    }
  }, [status, navigation]);

  data.anonymous = isEnabled;
  // const isAnonymous = data.anonymous;
  const categoryString = data.categories
    .map((item) => (item === 'Overig' ? `Overig: ${data.otherCategoryDescription}` : item))
    .join(', ');

  
  const locationString = data.location?.name || '';
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
        <Button mode="contained" onPress={submit}>
          Melding versturen
        </Button>
      </Container>
      <Container style={styles.toggleSwitch}>
        <Switch
        trackColor={{false: '#767577', true: '#B2D2A4'}}
        thumbColor={isEnabled ? '#1A4314' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}                
      />
      <Text>Anoniem melden?</Text>
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
  toggleSwitch: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginLeft: '5%',
    transform: [{ scaleX: 1.2 }, { scaleY: 1.2 }]
    
  },
  imageList: {
    marginTop: 4,
  },
  imageCard: {
    height: 200,
    width: 250,
    marginRight: 16,
  }
  
});

export default ReportSummary;
