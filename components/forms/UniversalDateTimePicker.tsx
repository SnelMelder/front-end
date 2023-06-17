import moment from 'moment';
import { useCallback } from 'react';
import DatePicker, { getToday } from 'react-native-modern-datepicker';
import COLORS from '../../constants/Colors';

interface Props {
  onChange: (newValue: Date) => void;
}

const UniversalDateTimePicker = ({ onChange }: Props) => {
  const today = new Date(Date.now());
  today.setHours(23, 59);

  const dateChangeHandler = useCallback(
    (dateString: string) => {
      const date = moment.utc(dateString, 'YYYY/MM/DD HH:mm').toDate();
      onChange(date);
    },
    [onChange]
  );

  return (
    <DatePicker
      options={{
        mainColor: COLORS.primary500,
      }}
      maximumDate={today.toISOString()}
      onSelectedChange={dateChangeHandler}
    />
  );
};

export default UniversalDateTimePicker;
