import { View, Text, StyleSheet, Image } from 'react-native';
import LoginButton from '../components/auth/LoginButton';

const goevaersLogoImage = require('../assets/images/goevaers_logo.png');

const LoginScreen = () => {
  return (
    <View style={styles.rootContainer}>
      <Image style={styles.logoImage} source={goevaersLogoImage} />
      <Text style={styles.headingText}>Welkom</Text>
      <Text style={styles.bodyText}>
        Log in met je werkaccount van Goevaers. Als je nog geen account van Goevaers hebt, neem dan contact op met je
        leidinggevende.
      </Text>
      <LoginButton style={styles.loginButton} />
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headingText: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 8,
  },
  bodyText: {
    textAlign: 'center',
  },
  logoImage: {
    height: 82,
    resizeMode: 'contain',
    marginBottom: 32,
  },
  loginButton: {
    width: '80%',
    marginTop: 32,
  },
});

export default LoginScreen;
