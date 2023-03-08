import { useState } from 'react';
import { View, Pressable, StyleSheet } from 'react-native';
import { ImageInfo, launchImageLibraryAsync, MediaTypeOptions, launchCameraAsync } from 'expo-image-picker';
import { ImagePickerAsset } from 'expo-image-picker';
import { Ionicons } from '@expo/vector-icons';
import ImageImportTypeModal from './ImageImportTypeModal';
import ImageCard from '../ui/ImageCard';


interface Props {
  value: ImagePickerAsset[];
  onValueChange: (images: ImagePickerAsset[]) => void;
}

const imageLibraryOptions = {
  base64: true,
  mediaTypes: MediaTypeOptions.Images,
  allowsMultipleSelection: false,
};

const cameraOptions = {
  base64: true,
  mediaTypes: MediaTypeOptions.Images,
};

const PicturePicker = ({ value, onValueChange }: Props) => {
  const [modalVisible, setModalVisible] = useState(false);

  const addImage = (image: ImagePickerAsset) => {        
    if (!value.some((item) => item.uri === image.uri) && [image, ...value].length <=5) {
      // image is not yet added
      onValueChange([...value, image]);
    }
    else{
      console.log('too many images')
    }
  };

  const removeImage = (image: ImagePickerAsset) => {
    onValueChange(value.filter((item) => item !== image));
  };

  const reset = () => {
    onValueChange([]);
  };

  const pickFromGallery = async () => {
    const image = await launchImageLibraryAsync(imageLibraryOptions);

    if (!image.canceled) addImage(image.assets[0]);

    setModalVisible(false);
  };

  const takePicture = async () => {
    const image = await launchCameraAsync(cameraOptions);

    if (!image.canceled) addImage(image.assets[0]);

    setModalVisible(false);
  };

  const setAsMainImage = (image: ImagePickerAsset) => {    
    onValueChange([image, ...value.filter((item) => item !== image)]);
  };

  return (
    <View style={styles.rootContainer}>
      <View style={styles.topContainer}>
        <ImageCard style={styles.mainImage} imageSource={value.length > 0 ? value[0] : undefined} />
        {value.length > 0 &&(<Pressable onPress={() => removeImage(value[0])} style={styles.binButton}>
          <Ionicons name="ios-remove-circle" size={45}/>
        </Pressable>)}                  
        
      </View>

      <View style={styles.bottomContainer}>
        {value.slice(1).map((image) => (
          <ImageCard
            onPress={() => setAsMainImage(image)}
            key={image.uri}
            style={styles.bottomContainerItem}
            imageSource={image}
          />
        ))}

        <Pressable onPress={() => setModalVisible(true)} style={[styles.addButton, styles.bottomContainerItem]}>
          <Ionicons name="add" size={45} />
        </Pressable>

        {value.length > 0 && (
          <Pressable onPress={reset} style={[styles.restartButton, styles.bottomContainerItem]}>
            <Ionicons name="refresh" size={35} />
          </Pressable>
        )}
      </View>

      <ImageImportTypeModal
        visible={modalVisible}
        onCancel={() => setModalVisible(false)}
        onOpenCamera={takePicture}
        onOpenGallery={pickFromGallery}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    marginRight: '-5%',
  },
  topContainer: {
    paddingRight: '5%',
  },
  mainImage: {
    width: '100%',
    aspectRatio: 1,
    marginBottom: '5%',
    marginRight: 20,
  },
  bottomContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  bottomContainerItem: {
    width: '20%',
    aspectRatio: 1,
    marginBottom: '5%',
    marginRight: '5%',
  },
  deleteButton: {
    backgroundColor: '#e1616188',
    borderRadius: 10,
    padding: 5,
    alignSelf: 'flex-end',
    position: 'absolute',
  },
  addButton: {
    backgroundColor: '#6ac580',
    borderRadius: 10,
    width: 50,
    height: 50,
    padding: 7,
    justifyContent: 'center',
    alignItems: 'center',
  },
  restartButton: {
    backgroundColor: '#e16161',
    borderRadius: 10,
    width: 50,
    height: 50,
    padding: 7,
    justifyContent: 'center',
    alignItems: 'center',
  },
  binButton: {
    backgroundColor: '#e16161',
    borderRadius: 7,
    width: 60,
    height: 60,
    bottom: 16,
    right: 16,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default PicturePicker;
