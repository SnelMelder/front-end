import { useContext } from 'react';
import { Image, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import { AuthContext } from '../auth/AuthContext';
import Container from '../components/ui/Container';

const SettingsScreen = () => {
  const { logout } = useContext(AuthContext);

  return (
    <>
      <Image style={styles.logo} source={require('../assets/images/SnelMelder_Home_Logo.png')} />
      <Container>
        <Button onPress={logout}>Uitloggen</Button>
      </Container>
    </>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: '100%',
  },
});

export default SettingsScreen;
