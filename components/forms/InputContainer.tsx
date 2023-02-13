import { View, ScrollView, StyleSheet } from 'react-native';

interface Props {
  children: React.ReactNode;
  style?: Record<string, unknown>;
}

const InputContainer = ({ children, style }: Props) => {
  return (
    <View style={[styles.rootContainer, style]}>
      <ScrollView>{children}</ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginVertical: 16,
    alignSelf: 'center',
    width: '100%',
  },
});

export default InputContainer;
