import React, {useState} from 'react';
import { View, Text, Image, TouchableOpacity, Pressable, Platform } from 'react-native';
import styles from './AddPhoto.scss';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBell, faPlus, faRefresh, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import Colors from '../../constants/Colors';


const AddPhoto = () => {

    const [selectedImage, setSelectedImage] = useState({});

    function DeleteImage() {

    }

    function AddImage() {
        
    }

    function Restart() {

    }

    function chooseMainImage() {
        setSelectedImage('../../assets/images/icon.png')
    }

    return (

        <View style={styles.container}>
                
            <View style={styles.mainImageContainer}>
                <Image 
                    source={{ uri: 'data:image/jpeg;base64,' + selectedImage}}
                    style={styles.mainImage}
                />
                <Pressable onPress={DeleteImage} style={styles.deleteButton}>
                    <FontAwesomeIcon icon={faTrashCan} size={32}></FontAwesomeIcon>
                </Pressable>
            </View> 
            
            <View style={styles.smallPressables}>
                {/* List of small images? with pressable to select them*/}
                <Pressable onPress={chooseMainImage} style={styles.addButton}>
                    <FontAwesomeIcon icon={faPlus} size={32}></FontAwesomeIcon>
                </Pressable>
                <Pressable onPress={Restart} style={styles.restartButton}>
                    <FontAwesomeIcon icon={faRefresh} size={32}></FontAwesomeIcon>
                </Pressable>
            </View>
            
        </View>
    );
};

export default AddPhoto;