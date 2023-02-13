import { Text } from 'react-native';

interface Props {
  children: string;
}

const Explanation = ({ children }: Props) => {
  return <Text>{children}</Text>;
};

export default Explanation;
