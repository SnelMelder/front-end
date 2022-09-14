import React, { useState } from 'react';
import { Text, Pressable, View, Button, Modal } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './ButtonInformation.scss';
import { ButtonInformationProps } from '../../types';

const ButtonInformation = ({ title, text }: ButtonInformationProps) => {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  return (
    <>
      <View style={{ flex: 1 }}>
        <Modal visible={isModalVisible}>
          <View
            style={
              (styles.content,
              {
                padding: 22,
                borderRadius: 4,
                borderColor: 'rgba(0, 0, 0, 0.1)',
                backgroundColor: 'white',
                justifyContent: 'center',
                alignItems: 'center',
              })
            }
          >
            <Text style={styles.modalTitle}>{title}</Text>
            <Text style={styles.modalText}>{text}</Text>
            <Button testID="close-button" onPress={toggleModal} title="Close" />
          </View>
        </Modal>
      </View>
      <Pressable
        style={({ pressed }) => ({
          opacity: pressed ? 0.5 : 1,
        })}
        onPress={toggleModal}
      >
        <Ionicons name="information-circle" size={26} />
      </Pressable>
    </>
  );
};

// const styles = StyleSheet.create({
//   content: {
//     backgroundColor: 'white',
//     padding: 22,
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderRadius: 4,
//     borderColor: 'rgba(0, 0, 0, 0.1)',
//   },
//   modalTitle: {
//     fontSize: 20,
//     marginBottom: 12,
//   },
//   modalText: {
//     fontSize: 12,
//     marginBottom: 12,
//   },
// });

export default ButtonInformation;
