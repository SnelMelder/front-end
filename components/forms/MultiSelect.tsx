import { StyleSheet, View } from 'react-native';
import { MultiSelectOptionPropType } from '../../types';
import MultiSelectItem from './MultiSelectItem';

interface Props<T> {
  options: Array<MultiSelectOptionPropType<T>>;
  style?: Record<string, unknown>;
  value: Array<T>;
  onValueChange: (newValue: Array<T>) => void;
}

const MultiSelect = <T extends unknown>({ style, options, value, onValueChange }: Props<T>) => {
  const selectCategoryHandler = (categoryName: T) => {
    if (value.includes(categoryName)) {
      const newValue = value.filter((item) => item !== categoryName);
      onValueChange(newValue);
    } else {
      const newValue = [...value, categoryName];
      onValueChange(newValue);
    }
  };

  return (
    <View style={[styles.container, style]}>
      {options.map((item) => (
        <MultiSelectItem
          key={item.id}
          name={item.name}
          image={item.image}
          label={item.label}
          backgroundColor={item.backgroundColor}
          isSelected={value.includes(item.name)}
          onPress={selectCategoryHandler}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignSelf: 'center',
  },
});

export default MultiSelect;
