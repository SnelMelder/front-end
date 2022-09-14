import { View, StyleSheet } from 'react-native';

interface CardProps {
  children: React.ReactNode;
}

const Card = ({ children }: CardProps) => {
  <View>{children}</View>;
};

const styles = StyleSheet.create({});

export default Card;
