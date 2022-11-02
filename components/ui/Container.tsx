import { View, StyleSheet } from 'react-native';

interface Props {
  children: React.ReactNode;
  style?: Record<string, unknown>;
}

const Container = ({ children, style }: Props) => <View style={[styles.container, style]}>{children}</View>;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1,
  },
});

export default Container;
