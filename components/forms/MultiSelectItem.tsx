import { View, Text, StyleSheet, ImageSourcePropType, Image, Pressable } from 'react-native';

interface Props<T> {
  name: T;
  image: ImageSourcePropType;
  label?: string;
  backgroundColor?: string;
  isSelected: boolean;
  onPress: (name: T) => void;
}

const tickImage = require('../../assets/images/tick.png');

const MultiSelectItem = <T extends unknown>({ name, image, label, backgroundColor, isSelected, onPress }: Props<T>) => {
  const pressHandler = () => {
    onPress(name);
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={pressHandler}>
        <View style={[styles.iconContainer, { backgroundColor }, isSelected && styles.iconContainerSelected]}>
          <Image style={styles.image} source={image} />
          {isSelected && (
            <>
              <View style={styles.overlay} />
              <Image style={styles.tick} source={tickImage} />
            </>
          )}
        </View>
      </Pressable>
      {label && <Text style={styles.label}>{label}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '40%',
    marginBottom: '10%',
  },
  iconContainer: {
    aspectRatio: 1,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  iconContainerSelected: {
    borderColor: '#52BB1D',
    borderWidth: 3,
  },
  label: {
    marginTop: 4,
    textAlign: 'center',
  },
  image: {
    width: '80%',
    height: '80%',
  },
  tick: {
    width: 32,
    height: 32,
    position: 'absolute',
    right: 8,
    bottom: 8,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#ffffff84',
  },
});

export default MultiSelectItem;
