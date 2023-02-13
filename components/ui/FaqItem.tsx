import { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Card, Text } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';

interface Props {
  question: string;
  answer: string;
}

const FaqItem = ({ question, answer }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen((current) => !current);

  return (
    <Card style={styles.rootContainer} onPress={toggleOpen} elevation={1}>
      <View style={styles.innerContainer}>
        <View style={styles.header}>
          {isOpen ? (
            <Ionicons style={styles.icon} name="chevron-up" size={24} />
          ) : (
            <Ionicons style={styles.icon} name="chevron-down" size={24} />
          )}
          <Text variant="titleMedium">{question}</Text>
        </View>
        {isOpen && (
          <View style={styles.content}>
            <Text>{answer}</Text>
          </View>
        )}
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    marginVertical: 8,
  },
  innerContainer: {
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 8,
    marginTop: 4,
  },
  content: {
    marginTop: 4,
    paddingHorizontal: 8,
  },
});

export default FaqItem;
