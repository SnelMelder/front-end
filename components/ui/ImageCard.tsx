import { ImageBackground, StyleSheet, View, ImageSourcePropType, Pressable } from 'react-native';

interface Props {
  style?: Record<string, unknown>;
  imageSource?: ImageSourcePropType;
  onPress?: () => unknown;
}

const ImageCard = ({ style, imageSource, onPress }: Props) => (
  <View style={[styles.container, style]}>
    <Pressable style={styles.pressable} onPress={onPress}>
      {imageSource && <ImageBackground style={styles.image} source={imageSource} resizeMode="cover" />}
    </Pressable>
  </View>
);

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#e3e2e2',
  },
  pressable: {
    flex: 1,
  },
  image: {
    flex: 1,
  },
});

export default ImageCard;
