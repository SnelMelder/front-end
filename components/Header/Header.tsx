import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from "@expo/vector-icons";
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
        <Ionicons name="chevron-back" size={26} />
      </TouchableOpacity>

      <Image style={styles.logo} source={require('../../assets/images/header_nieuwe_melding.png')} />

      <TouchableOpacity
        onPress={handleClose}
        style={[styles.buttonRight, styles.button]}
        accessibilityLabel="Close button"
      >
        <Ionicons name="close" size={28} />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
