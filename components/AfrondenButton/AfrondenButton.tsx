import React, { ReactNode } from 'react';
import { Text, View } from 'react-native';
import styles from './AfrondenButton.scss';

interface Props {
  children?: ReactNode;
}

const AfrondenButton = ({ children }: Props) => (
  <View style={styles.container}>
    <Text style={styles.modalText}>Uw melding</Text>
    <Text style={styles.closeButton}>Afronden</Text>
    <View style={styles.closeButton}>{children}</View>
  </View>
);

export default AfrondenButton;
