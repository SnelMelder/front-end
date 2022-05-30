import React, { Component } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import { ScrollView, Platform, Pressable, Button, TouchableOpacity } from 'react-native';
import { View, Text } from '../Themed';
import moment from 'moment';

import styles from './DateTime.scss';

export default class DateTime extends Component {
  state = {
    date: new Date(),
    mode: 'date',
    show: false,
  };

  setDate = (event, date) => {
    date = date || this.state.date;

    this.setState({
      show: Platform.OS === 'ios' ? true : false,
      date,
    });
  };

  show = (mode) => {
    this.setState({
      show: true,
      mode,
    });
  };

  datepicker = () => {
    this.show('date');
  };

  timepicker = () => {
    this.show('time');
  };

  renderIos() {
    const { show, date, mode } = this.state;
    return (
      <View>
        <DateTimePicker
          testID="datePicker"
          display="inline"
          value={date}
          accentColor="#008F73"
          mode="date"
          is24Hour={true}
          style={styles.date_picker}
          maximumDate={moment().toDate()}
        />
        <View style={styles.time_container}>
          <View style={styles.time_container_title}>
            <Text style={styles.time_title}>Tijd</Text>
          </View>
          <DateTimePicker
            testID="timePicker"
            display="compact"
            value={date}
            mode="time"
            is24Hour={true}
            style={styles.time_picker}
          />
        </View>
      </View>
    );
  }

  renderAndroid() {
    return (
      <View>
        <TouchableOpacity onPress={this.datepicker} style={{ alignSelf: 'stretch', flex: 1, flexDirection: 'column' }}>
          <View style={styles.time_container_a}>
            <Text style={styles.time_title}>Datum</Text>
            <Text style={styles.time_picker}>{moment(this.state.date).format('DD-MM-YYYY')}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.timepicker} style={{ alignSelf: 'stretch', flex: 1, flexDirection: 'column' }}>
          <View style={styles.time_container_a}>
            <Text style={styles.time_title}>Tijd</Text>
            <Text style={styles.time_picker}>{moment(this.state.date).format('HH:mm')}</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }

  render() {
    const { show, date, mode } = this.state;

    return (
      <ScrollView style={styles.container}>
        {Platform.OS == 'ios' ? this.renderIos() : this.renderAndroid()}

        {show && (
          <DateTimePicker
            value={date}
            mode={mode}
            is24Hour={true}
            display="default"
            onChange={this.setDate}
            style={styles.date_picker}
            maximumDate={moment().toDate()}
          />
        )}
      </ScrollView>
    );
  }
}
