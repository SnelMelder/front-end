import { StyleSheet, View } from 'react-native';
import SelectItem from './SelectItem';

interface Props {
  options: string[];
  onValueChange: (selectedValue: string) => void;
  value?: string;
}

const Select = ({ options, onValueChange, value }: Props) => {
  const selectHandler = (selectedOption: string) => {
    onValueChange(selectedOption);
  };

  return (
    <View>
      {options.map((option) => (
        <SelectItem
          style={styles.selectItem}
          key={option}
          name={option}
          displayName={option}
          onPress={selectHandler}
          isSelected={value === option}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  selectItem: {
    marginBottom: 8,
  },
});

export default Select;
