import React, { Component } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import { ScrollView, Platform, Pressable, Button, TouchableOpacity } from 'react-native';
import { View, Text } from '../Themed';
import moment from 'moment';

import styles from './DateTime.scss';

// const IosElement = () => {
//    return (
//         <View><DateTimePicker
//           // testID="datePicker"
//           display="inline"
//           value={date}
//           // accentColor="#008F73"
//           mode="date"
//           is24Hour={true}
//           style={styles.date_picker}
//         />
//           <View style={styles.time_container}>
//             <Text style={styles.time_title}>Tijd</Text>
//             <DateTimePicker
//               testID="timePicker"
//               display="compact"
//               value={time}
//               mode="time"
//               is24Hour={true}
//               style={styles.time_picker}
//             />
//           </View>
//         </View>
//       )
// }

// const Timepicker = (time) => {
//   return (
//     <DateTimePicker value={time}
//                     mode={mode}
//                     is24Hour={true}
//                     display="default"
//                     onChange={this.setDate} />
//   );
// }

// const AndroidElement = (date, time) => {
//   return (
//       <View style={styles.time_container}>
//       <Text style={styles.time_title}>Tijd</Text>
//       <Pressable onPress={Timepicker(time)} style={styles.time_picker}>
//         <Text>Test</Text>
//       </Pressable>
//     </View>
//   )
// }

// const DateTime = () => {
//   const [date, setDate] = useState(new Date());
//   const [time, setTime] = useState(new Date());

//   return (
//     <ScrollView style={styles.container}>
//       <Text style={styles.title}>Wanneer heeft het incident plaatsgevonden?</Text>
//       <Text style={styles.sub_title}>Vul de datum en het tijdstip van het incident in.</Text>
//         <View>
//          { Platform.OS == 'ios' ? IosElement() : AndroidElement(date, time) }
//         </View>
//     </ScrollView>
//   );
// };

// export default DateTime;

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
      </View>
    );
  }

  renderAndroid() {
    return (
      <View>
        <TouchableOpacity onPress={this.datepicker} style={{ alignSelf: 'stretch', flex: 1, flexDirection: 'column' }}>
          <View style={styles.time_container}>
            <Text style={styles.time_title}>Datum</Text>
            <Text style={styles.time_picker}>{moment(this.state.date).format('DD-MM-YYYY')}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.timepicker} style={{ alignSelf: 'stretch', flex: 1, flexDirection: 'column' }}>
          <View style={styles.time_container}>
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
      <ScrollView style={{ paddingTop: 25 }}>
        <Text style={styles.title}>Wanneer heeft het incident plaatsgevonden?</Text>
        <Text style={styles.sub_title}>Vul de datum en het tijdstip van het incident in.</Text>

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
