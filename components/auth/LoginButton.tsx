import { useContext } from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { AuthContext } from '../../auth/AuthContext';

import PrimaryButton from '../ui/PrimaryButton';

interface Props {
  style?: StyleProp<ViewStyle>;
}

const LoginButton = ({ style }: Props) => {
  const { login } = useContext(AuthContext);

  return <PrimaryButton style={style} text="Inloggen" onPress={login} />;
};

export default LoginButton;
