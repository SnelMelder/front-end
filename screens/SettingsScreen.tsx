import { useContext } from 'react';
import { Button } from 'react-native-paper';
import { AuthContext } from '../auth/AuthContext';
import LogoHeader from '../components/LogoHeader';
import Container from '../components/ui/Container';

const SettingsScreen = () => {
  const { logout } = useContext(AuthContext);

  return (
    <>
      <LogoHeader />
      <Container>
        <Button onPress={logout}>Uitloggen</Button>
      </Container>
    </>
  );
};

export default SettingsScreen;
