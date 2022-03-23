import React, { useState } from 'react';
import { View, Text, Image, Modal } from 'react-native';
import styles from './ConfirmationModal.scss';

const ConfirmationModal = (props: { visible: boolean; children: any }) => {
    const [modalVisible, setModalVisible] = useState<boolean>(props.visible);

    React.useEffect(() => {
        toggleModal();
    }, [props.visible]);

    const toggleModal = () => {
        if (!props.visible) {
            setModalVisible(false);
        } else {
            setModalVisible(true);
        }
    };

    return (
        <Modal animationType="fade" transparent={false} visible={modalVisible}>
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Image
                        style={styles.image}
                        source={require('../../assets/images/tick.png')}
                    />
                    <Text style={styles.modalText}>
                        Uw melding is verstuurd naar de uitvoerder.
                    </Text>
                    <View style={styles.closeButton}>{props.children}</View>
                </View>
            </View>
        </Modal>
    );
};

export default ConfirmationModal;
