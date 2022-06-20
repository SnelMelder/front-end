import React, { useEffect, useState} from 'react';
import { View, Text, Image, Pressable, Platform, Modal, FlatList } from 'react-native';
import styles from './ReportAddPicture.scss';
import sharedStyles from '../shared.scss';
import ButtonInformation from '../../components/ButtonInformation/ButtonInformation';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPlus, faRefresh, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import * as ImagePicker from 'expo-image-picker';

const ReportAddPicture = () => {
  const [selectedImage, setSelectedImage] = useState<{id: number, image: ImagePicker.ImageInfo} | undefined>();
  const [modalVisible, setModalVisible] = useState(false);
  const [list, setList] = useState<{id: number, image: ImagePicker.ImageInfo}[]>([]);
  
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
    const status = ImagePicker.requestMediaLibraryPermissionsAsync();
    console.log(status);
    const image = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      allowsMultipleSelection: false,
      base64: true
    });

    if (!image.cancelled) {
      list.push({id: list.length + 1, image: image});
      setSelectedImage({id: list.length + 1, image: image});
      setModalVisible(false);
    }
  }

  const takePicture = async() => {
    const status = ImagePicker.requestCameraPermissionsAsync();
    const image = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      base64: true
    })

    if (!image.cancelled) {
      list.push({id: list.length + 1, image: image});
      setSelectedImage({id: list.length + 1, image: image});
      setModalVisible(false);
    }
  }

  function DeleteImage() {
    if(typeof selectedImage?.id === "number"){
      let int = (selectedImage?.id-1);
      list.splice(int, 1);
      let imageBefore = list.at(int-1);
      if(typeof imageBefore !== "undefined"){
        setSelectedImage({id: imageBefore.id, image: imageBefore.image});
      }
    }
  }

  function Restart() {
    list.splice(0, list.length);
    setSelectedImage(undefined);
  }

  function chooseMainImage(id: number) {
    const item = list.at(id);
    if(typeof item?.id === "number" && typeof item.image){
      setSelectedImage({id: item.id, image: item.image});
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={sharedStyles.title}>Voeg een foto toe</Text>
        <ButtonInformation title="Voeg een foto toe" text="De foto waar u uw probleem heeft gevonden." />
      </View>
      <View style={styles.mainImageContainer}>
        {selectedImage
          ? <Image
              source={{uri: `data:image/jpg;base64,${selectedImage.image.base64}`}}
              style={styles.mainImage}
            /> 
          : null}
        {selectedImage
          ?<Pressable onPress={() => DeleteImage()} style={styles.deleteButton}>
              <FontAwesomeIcon icon={faTrashCan} size={32}></FontAwesomeIcon>
          </Pressable> 
        : null}
      </View> 
      
      <View style={styles.smallPressablesContainer}>
        <View>
          {selectedImage
          ? <FlatList
            data={list}
            renderItem={({item, index}) =>
              <Pressable onPress={() => chooseMainImage(index)} style={styles.smallImagePressable}>
                <Image
                  source={{uri: `data:image/jpg;base64,${item.image.base64}`}}
                  style={styles.smallImage}
                />
              </Pressable>
            }
            horizontal={true}
            contentContainerStyle={styles.flatListContainer}
          />
          : null}
        </View>

        <Pressable onPress={() => setModalVisible(true)} style={styles.addButton}>
          <FontAwesomeIcon icon={faPlus} size={35} style={styles.icons}></FontAwesomeIcon>
        </Pressable>
        {list.length
          ? <Pressable onPress={() => Restart()} style={styles.restartButton}>
            <FontAwesomeIcon icon={faRefresh} size={35}></FontAwesomeIcon>
          </Pressable>
        : null}
        
      </View>

      {/* Pop up modal when adding a new photo */}
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
            <Pressable onPress={takePicture} style={styles.modalButton}>
              <Text style={styles.modalText}>Take an image</Text>
            </Pressable>
            <Pressable onPress={openGallery} style={styles.modalButton}>
              <Text style={styles.modalText}>Choose an Image</Text>
            </Pressable>
            <Pressable onPress={() => setModalVisible(false)} style={styles.modalButtonCancel}>
              <Text style={styles.modalText}>Cancel</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
            
    </View>
  );
};

export default ReportAddPicture;
