import React, { useState } from 'react';
import { Pressable, Button } from 'react-native';
import styles from './shared.scss';

import { Text, View } from '../components/Themed';
import ConfirmationModal from '../components/ConfirmationModal/ConfirmationModal';

const TabTwoScreen = () => {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Tab Two</Text>

            {/* For the confirmation button (Conformation popup) */}
            <View style={styles.container}>
                <ConfirmationModal visible={modalVisible}>
                    <Pressable
                        style={styles.button}
                        onPress={() => setModalVisible(false)}
                    >
                        <Text style={[styles.modalText, { fontSize: 20 }]}>
                            Ok!
                        </Text>
                    </Pressable>
                </ConfirmationModal>
                <Button
                    onPress={() => setModalVisible(true)}
                    title="Melding versturen"
                />
            </View>

            <View
                style={styles.separator}
                lightColor="#eee"
                darkColor="rgba(255,255,255,0.1)"
            />
        </View>
    );
};

export default TabTwoScreen;
