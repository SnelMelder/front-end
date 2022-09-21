import { View, Pressable, Text, StyleSheet, StyleProp, ViewStyle } from 'react-native';
import COLORS from '../../constants/Colors';

interface Props {
  text: string;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
}

const PrimaryButton = ({ text, style, onPress }: Props) => {
  return (
    <View style={[styles.rootContainer, style]}>
      <Pressable android_ripple={{ color: COLORS.primary400 }} onPress={onPress}>
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
