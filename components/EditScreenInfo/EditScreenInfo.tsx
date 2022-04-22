import React from 'react';
import { ScrollView } from 'react-native';
import styles from './EditScreenInfo.scss';

import { Text, View } from '../Themed';

const EditScreenInfo = () => {
  return (
    <ScrollView>
      <View style={styles.getStartedContainer}>
        <Text style={styles.bigtitle} lightColor="rgba(0,0,0,0.8)" darkColor="rgba(255,255,255,0.8)">
          Informatie
        </Text>
        <Text style={styles.title} lightColor="rgba(0,0,0,0.8)" darkColor="rgba(255,255,255,0.8)">
          Wanneer maak ik een melding?
        </Text>
        <Text style={styles.getStartedText} lightColor="rgba(0,0,0,0.8)" darkColor="rgba(255,255,255,0.8)">
          Een incident meld je altijd intern. Wanneer je kunt leren van een incident, omdat in de zorgverlening iets
          niet goed is gegaan, meld je het incident in het Veilig Incidenten Melden (VIM) of het Melding Incidenten
          Cliënten (MIC)-systeem.
        </Text>
        <Text />
        <Text />
        <Text style={styles.title} lightColor="rgba(0,0,0,0.8)" darkColor="rgba(255,255,255,0.8)">
          Wanneer is een incident een ongeval?
        </Text>
        <Text style={styles.getStartedText} lightColor="rgba(0,0,0,0.8)" darkColor="rgba(255,255,255,0.8)">
          Een incident meld je altijd intern. Wanneer je kunt leren van een incident, omdat in de zorgverlening iets
          niet goed is gegaan, meld je het incident in het Veilig Incidenten Melden (VIM) of het Melding Incidenten
          Cliënten (MIC)-systeem.
        </Text>
        <Text />
        <Text />
        <Text style={styles.title} lightColor="rgba(0,0,0,0.8)" darkColor="rgba(255,255,255,0.8)">
          Wanneer is een incident een bijna ongeval?
        </Text>
        <Text style={styles.getStartedText} lightColor="rgba(0,0,0,0.8)" darkColor="rgba(255,255,255,0.8)">
          Een incident meld je altijd intern. Wanneer je kunt leren van een incident, omdat in de zorgverlening iets
          niet goed is gegaan, meld je het incident in het Veilig Incidenten Melden (VIM) of het Melding Incidenten
          Cliënten (MIC)-systeem.
        </Text>
        <Text />
        <Text />
        <Text style={styles.title} lightColor="rgba(0,0,0,0.8)" darkColor="rgba(255,255,255,0.8)">
          Wat gebeurt er wanneer ik mijn melding anoniem maak?
        </Text>
        <Text style={styles.getStartedText} lightColor="rgba(0,0,0,0.8)" darkColor="rgba(255,255,255,0.8)">
          Een incident meld je altijd intern. Wanneer je kunt leren van een incident, omdat in de zorgverlening iets
          niet goed is gegaan, meld je het incident in het Veilig Incidenten Melden (VIM) of het Melding Incidenten
          Cliënten (MIC)-systeem.
        </Text>
        <Text />
        <Text />
        <Text />
        <Text />
      </View>
    </ScrollView>
  );
};

export default EditScreenInfo;
