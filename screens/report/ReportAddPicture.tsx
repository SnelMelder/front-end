import React, {useCallback, useEffect, useState} from 'react';

import ButtonInformation from '../../components/ButtonInformation/ButtonInformation';
import { View, Text, Image, Pressable, Platform, Modal } from 'react-native';
import styles from './ReportAddPicture.scss';
import ImagePickerCom from '../../components/ImagePicker/ImagePicker'
//import * as ImagePicker from 'react-native-image-picker';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPlus, faRefresh, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { useMediaLibraryPermissions } from 'expo-image-picker';
import * as ImagePicker from 'expo-image-picker';

var listImages = [];

const ReportAddPicture = () => {
    
    const [selectedImage, setSelectedImage] = useState(null);
    const [pickerResponse, setPickerResponse] = useState<ImagePicker.ImageInfo>();
    const [modalVisible, setModalVisible] = useState(false);

    function DeleteImage() {

    }

    useEffect(() => {
      (async () => {
        if (Platform.OS !== 'web') {
          const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
          if (status !== 'granted') {
            alert('Sorry, we need camera roll permissions to choose a photo.');
          }
        }
      })();
    }, []);

    const openGallery = async() => {
      //const options: ImagePicker.ImageLibraryOptions;
      const status = ImagePicker.requestMediaLibraryPermissionsAsync();
      console.log(status);
      const image = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true
      });

      if (!image.cancelled) {
        console.log(image);
        setPickerResponse(image);
        setModalVisible(false);
      }
      
    }

    const takePicture = async() => {
      const status = ImagePicker.requestCameraPermissionsAsync();
      const image = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true
      })

      if (!image.cancelled) {
        console.log(image);
        setPickerResponse(image);
        setModalVisible(false);
      }
    }

    function Restart() {

    }

    function chooseMainImage() {
      
    }

  return (
    <View style={styles.container}>
      <Modal
        animationType='slide'
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.popupContainer}>
          <View style={styles.modal}>
            {/* <ImagePickerCom></ImagePickerCom> */}
            <Pressable onPress={takePicture} style={styles.addButton}>
              <Text>Take an image</Text>
            </Pressable>
            <Pressable onPress={openGallery} style={styles.addButton}>
              <Text>Choose an Image</Text>
            </Pressable>
            <Pressable onPress={() => setModalVisible(false)} style={styles.addButton}>
              <Text>Cancel</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      <Text style={styles.title}>Voeg een foto toe</Text>
          {/* <Image 
                source={{uri: pickerResponse?.uri}}
                style={styles.mainImage}
            /> */}
        <View style={styles.mainImageContainer}>
            <Image
                source={{uri: pickerResponse?.uri}}
                style={styles.mainImage}
            />
            <Pressable onPress={DeleteImage} style={styles.deleteButton}>
                <FontAwesomeIcon icon={faTrashCan} size={32}></FontAwesomeIcon>
            </Pressable>
        </View> 
            
        <View style={styles.smallPressables}>
            {/* List of small images? with pressable to select them*/}
            <Pressable onPress={() => setModalVisible(true)} style={styles.addButton}>
                <FontAwesomeIcon icon={faPlus} size={32}></FontAwesomeIcon>
            </Pressable>
            <Pressable onPress={Restart} style={styles.restartButton}>
                <FontAwesomeIcon icon={faRefresh} size={32}></FontAwesomeIcon>
            </Pressable>
        </View>
            
    </View>
  );
};

export default ReportAddPicture;
