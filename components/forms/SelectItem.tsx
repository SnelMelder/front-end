import { Pressable, View, StyleSheet, Text } from 'react-native';
import COLORS from '../../constants/Colors';

interface Props {
  style?: Record<string, unknown>;
  onPress: (name: string) => void;
  name: string;
  displayName: string;
  isSelected: boolean;
}

const SelectItem = ({ style, name, displayName, onPress, isSelected }: Props) => {
  const select = () => onPress(name);

  return (
    <View style={style}>
      <Pressable onPress={select}>
        <View style={[styles.container, isSelected && styles.containerSelected]}>
          <Text style={[styles.text, isSelected && styles.textSelected]}>{displayName}</Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
  },
  containerSelected: {
    borderColor: COLORS.primary500,
    backgroundColor: COLORS.primary500,
  },
  text: {
    color: 'black',
  },
  textSelected: {
    color: 'white',
  },
});

export default SelectItem;
