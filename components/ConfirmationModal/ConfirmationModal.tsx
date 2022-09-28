import React, { useState } from 'react';
import { View, Text, Image, Modal } from 'react-native';
import styles from './ConfirmationModal.scss';

const tickImage = require('../../assets/images/tick.png');

interface Props {
  visible: boolean;
  children?: React.ReactNode;
}

const ConfirmationModal = ({ visible, children }: Props) => {
  const [modalVisible, setModalVisible] = useState<boolean>(visible);

  React.useEffect(() => {
    if (!visible) {
      setModalVisible(false);
    } else {
      setModalVisible(true);
    }
  }, [visible]);

  return (
    <Modal animationType="fade" transparent={false} visible={modalVisible}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Image style={styles.image} source={tickImage} />
          <Text style={styles.modalText}>Uw melding is verstuurd naar de uitvoerder.</Text>
          <View style={styles.closeButton}>{children}</View>
        </View>
      </View>
    </Modal>
  );
};

export default ConfirmationModal;
