import { View, StyleSheet } from 'react-native';

interface Props {
  children: React.ReactNode;
}

const Container = ({ children }: Props) => <View style={styles.container}>{children}</View>;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1,
  },
});

export default Container;
