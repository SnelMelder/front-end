import { Text, StyleSheet } from 'react-native';

interface Props {
  children: string;
}

const Question = ({ children }: Props) => {
  return <Text style={styles.text}>{children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Question;
