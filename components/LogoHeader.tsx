import { Image, StyleSheet } from 'react-native';

const LogoImageSrc = require('../assets/images/SnelMelder_Home_Logo.png');

const LogoHeader = () => <Image style={styles.image} source={LogoImageSrc} />;

const styles = StyleSheet.create({
  image: {
    width: '100%',
  },
});

export default LogoHeader;
