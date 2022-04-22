import React, { useState } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import { ScrollView } from 'react-native';
import { View, Text } from '../Themed';

import styles from './DateTime.scss';

const DateTime = () => {
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Wanneer heeft het incident plaatsgevonden?</Text>
      <Text style={styles.sub_title}>Vul de datum en het tijdstip van het incident in.</Text>
      <DateTimePicker
        testID="datePicker"
        display="inline"
        value={date}
        accentColor="#008F73"
        mode="date"
        is24Hour={true}
        style={styles.date_picker}
      />
      <View style={styles.time_container}>
        <Text style={styles.time_title}>Tijd</Text>
        <DateTimePicker
          testID="timePicker"
          display="compact"
          value={time}
          mode="time"
          is24Hour={true}
          style={styles.time_picker}
        />
      </View>
    </ScrollView>
  );
};

export default DateTime;
