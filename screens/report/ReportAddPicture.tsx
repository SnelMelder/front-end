import React, {useCallback, useEffect, useState} from 'react';

import ButtonInformation from '../../components/ButtonInformation/ButtonInformation';
import { View, Text, Image, Pressable, Platform } from 'react-native';
import styles from './ReportAddPicture.scss';
import * as ImagePicker from 'react-native-image-picker';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPlus, faRefresh, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { useMediaLibraryPermissions } from 'expo-image-picker';
import * as ExpoImagePicker from 'expo-image-picker';
const ReportAddPicture = () => {
    function DeleteImage() {
    }
    const openGallery = async() => {
    }
    function Restart() {
    }
    function chooseMainImage() {
    }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Voeg een foto toe</Text>
        <View style={styles.mainImageContainer}>
            <Image 
                source={require('../../assets/images/goevaers_logo.png')}
                style={styles.mainImage}
            />
            <Pressable onPress={DeleteImage} style={styles.deleteButton}>
                <FontAwesomeIcon icon={faTrashCan} size={32}></FontAwesomeIcon>
            </Pressable>
        </View> 

        <View style={styles.smallPressables}>
            <Pressable onPress={openGallery} style={styles.addButton}>
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
