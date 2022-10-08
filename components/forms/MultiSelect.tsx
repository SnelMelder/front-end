import { StyleSheet, View, ImageSourcePropType } from 'react-native';
import MultiSelectOption from './MultiSelectOption';

interface AnsweringOption {
  name: string;
  label?: string;
  image: ImageSourcePropType;
  backgroundColor?: string;
}

interface Props {
  answeringOptions: Array<AnsweringOption>;
  style?: Record<string, unknown>;
  value: Array<string>;
  onChange: (newValue: Array<string>) => void;
}

const MultiSelect = ({ answeringOptions, style, value, onChange }: Props) => {
  const selectCategoryHandler = (categoryName: string) => {
    if (value.includes(categoryName)) {
      const index = value.indexOf(categoryName);
      value.splice(index, 1);
      onChange(value);
    } else {
      value.push(categoryName);
      onChange(value);
    }
  };

  return (
    <View style={[styles.container, style]}>
      {answeringOptions.map((item) => (
        <MultiSelectOption
          key={item.name}
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
