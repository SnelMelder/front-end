import React, { useEffect, useState } from 'react';
import { View, Text, Image, Pressable, Platform, Modal, FlatList, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import styles from './ReportAddPicture.scss';
import sharedStyles from '../shared.scss';
import ButtonInformation from '../../components/ButtonInformation/ButtonInformation';

const ReportAddPicture = () => {
  const [selectedImage, setSelectedImage] = useState<{ id: number; image: ImagePicker.ImageInfo } | undefined>();
  const [modalVisible, setModalVisible] = useState(false);
  const [list] = useState<{ id: number; image: ImagePicker.ImageInfo }[]>([]);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          Alert.alert('Sorry, we need camera roll permissions to choose a photo.');
        }
      }
    })();
  }, []);

  const openGallery = async () => {
    const image = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      allowsMultipleSelection: false,
      base64: true,
    });

    if (!image.cancelled) {
      list.push({ id: list.length + 1, image });
      setSelectedImage({ id: list.length + 1, image });
      setModalVisible(false);
    }
  };

  const takePicture = async () => {
    const image = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      base64: true,
    });

    if (!image.cancelled) {
      list.push({ id: list.length + 1, image });
      setSelectedImage({ id: list.length + 1, image });
      setModalVisible(false);
    }
  };

  function DeleteImage() {
    if (typeof selectedImage?.id === 'number') {
      const int = selectedImage.id - 1;
      list.splice(int, 1);
      const imageBefore = list.at(int - 1);
      if (typeof imageBefore !== 'undefined') {
        setSelectedImage({ id: imageBefore.id, image: imageBefore.image });
      }
    }
  }

  function Restart() {
    list.splice(0, list.length);
    setSelectedImage(undefined);
  }

  function chooseMainImage(id: number) {
    const item = list.at(id);
    if (typeof item?.id === 'number' && typeof item.image) {
      setSelectedImage({ id: item.id, image: item.image });
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={sharedStyles.title}>Voeg een foto toe</Text>
        <ButtonInformation title="Voeg een foto toe" text="De foto waar u uw probleem heeft gevonden." />
      </View>
      <View style={styles.mainImageContainer}>
        {selectedImage ? (
          <Image source={{ uri: `data:image/jpg;base64,${selectedImage.image.base64}` }} style={styles.mainImage} />
        ) : null}
        {selectedImage ? (
          <Pressable onPress={() => DeleteImage()} style={styles.deleteButton}>
            <Ionicons name="trash" size={32} />
          </Pressable>
        ) : null}
      </View>

      <View style={styles.smallPressablesContainer}>
        <View>
          {selectedImage ? (
            <FlatList
              data={list}
              renderItem={({ item, index }) => (
                <Pressable onPress={() => chooseMainImage(index)} style={styles.smallImagePressable}>
                  <Image source={{ uri: `data:image/jpg;base64,${item.image.base64}` }} style={styles.smallImage} />
                </Pressable>
              )}
              horizontal
              contentContainerStyle={styles.flatListContainer}
            />
          ) : null}
        </View>

        <Pressable onPress={() => setModalVisible(true)} style={styles.addButton}>
          <Ionicons name="add" size={35} />
        </Pressable>
        {list.length ? (
          <Pressable onPress={() => Restart()} style={styles.restartButton}>
            <Ionicons name="refresh" size={35} />
          </Pressable>
        ) : null}
      </View>

      {/* Pop up modal when adding a new photo */}
      <Modal
        animationType="slide"
        transparent
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
