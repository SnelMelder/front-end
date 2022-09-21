import { StyleProp, ViewStyle } from 'react-native';
import PrimaryButton from '../ui/PrimaryButton';

interface Props {
  style?: StyleProp<ViewStyle>;
}

const LoginButton = ({ style }: Props) => {
  return <PrimaryButton style={style} text="Inloggen" />;
};

export default LoginButton;
