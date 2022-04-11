import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronLeft, faXmark } from '@fortawesome/free-solid-svg-icons';
// Documentation:
// https://www.npmjs.com/package/@fortawesome/react-native-fontawesome#size
import styles from './Header.scss';
import { HeaderProps } from '../../types';

const Header = ({ handleBack, handleClose }: HeaderProps) => {
    return (
        <View style={styles.header}>
            <TouchableOpacity
                onPress={handleBack}
                style={[styles.buttonLeft, styles.button]}
                accessibilityLabel="Back button"
            >
                <FontAwesomeIcon icon={faChevronLeft} size={26} />
            </TouchableOpacity>

            <View style={styles.container}>
                <Image
                    style={styles.logo}
                    source={require('../../assets/images/goevaers_logo.png')}
                />
                <Text style={styles.text}>NIEUWE MELDING</Text>
            </View>

            <TouchableOpacity
                onPress={handleClose}
                style={[styles.buttonRight, styles.button]}
                accessibilityLabel="Close button"
            >
                <FontAwesomeIcon icon={faXmark} size={28} />
            </TouchableOpacity>
        </View>
    );
};

export default Header;
