import { Entypo } from '@expo/vector-icons';
import { View, StyleSheet, Text, Pressable } from 'react-native';

interface Props {
  title: string;
  content: string;
  onPress: () => void;
}

const SummaryItem = ({ title, content, onPress }: Props) => (
  <View style={styles.container}>
    <Text style={styles.title}>{title}</Text>
    <Pressable style={styles.button} onPress={onPress}>
      <Entypo style={styles.icon} name="pencil" size={24} />
      <Text style={styles.content}>{content}</Text>
    </Pressable>
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginVertical: 16,
  },
  button: {
    flexDirection: 'row',
    paddingHorizontal: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  icon: {
    marginLeft: -8,
    marginRight: 8,
  },
  content: {
    textDecorationLine: 'underline',
  },
});

export default SummaryItem;
