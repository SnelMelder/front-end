import { useState } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

interface Props {
  value: Date;
  onChange: (newValue: Date) => void;
  minDate?: Date;
  maxDate?: Date;
}

const DateTimePicker = ({ value, onChange, minDate, maxDate }: Props) => {
  const [show, setShow] = useState(false);

  const formatDateTime = () => {
    const formattedDate = Intl.DateTimeFormat('nl-NL', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      minute: 'numeric',
      hour: 'numeric',
    }).format(value);

    return formattedDate;
  };

  const handleConfirm = (date: Date) => {
    onChange(date);
    hideDateTimePicker();
  };

  const showDateTimePicker = () => {
    setShow(true);
  };

  const hideDateTimePicker = () => {
    setShow(false);
  };

  return (
    <>
      <Pressable onPress={showDateTimePicker}>
        <View style={styles.container}>
          <Text>{formatDateTime()}</Text>
        </View>
      </Pressable>

      <DateTimePickerModal
        isVisible={show}
        mode="datetime"
        onConfirm={handleConfirm}
        onCancel={hideDateTimePicker}
        maximumDate={maxDate}
        minimumDate={minDate}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    borderColor: '#909090',
    borderWidth: 1,
    padding: 16,
    borderRadius: 4,
  },
});

export default DateTimePicker;
