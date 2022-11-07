import { Image, StyleSheet, Dimensions } from 'react-native';

const LogoImageSrc = require('../assets/images/SnelMelder_Home_Logo.png');

const LogoHeader = () => <Image style={styles.image} source={LogoImageSrc} />;

const { width } = Dimensions.get('window');
const ratio = 423 / 800;

const styles = StyleSheet.create({
  image: {
    width,
    height: width * ratio,
  },
});

export default LogoHeader;
