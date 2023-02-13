import { View, Pressable, Text, StyleSheet, StyleProp, ViewStyle } from 'react-native';
import COLORS from '../../constants/Colors';

interface Props {
  text: string;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
  disabled?: boolean;
}

const PrimaryButton = ({ text, style, onPress, disabled }: Props) => {
  const handlePress = () => {
    if (!disabled && onPress) {
      onPress();
    }
  };

  return (
    <View style={[styles.rootContainer, disabled && styles.rootContainerDisabled, style]}>
      <Pressable android_ripple={{ color: disabled ? undefined : COLORS.primary400 }} onPress={handlePress}>
        <View style={styles.innerContainer}>
          <Text style={styles.text}>{text}</Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    borderRadius: 200,
    backgroundColor: COLORS.primary500,
    overflow: 'hidden',
  },
  rootContainerDisabled: {
    backgroundColor: '#cdcdcd',
  },
  innerContainer: {
    paddingVertical: 16,
    paddingHorizontal: 32,
  },
  text: {
    color: COLORS.white,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default PrimaryButton;
