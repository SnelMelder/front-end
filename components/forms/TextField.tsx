import { TextInput, StyleSheet, View, TextInputProps } from 'react-native';

const TextField = (props: TextInputProps) => {
  return (
    <View style={styles.container}>
      <TextInput multiline numberOfLines={3} maxLength={5000} {...props} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderColor: '#909090',
    borderWidth: 1,
    padding: 16,
    borderRadius: 8,
  },
});

export default TextField;
