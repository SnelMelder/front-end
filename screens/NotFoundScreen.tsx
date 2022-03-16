import React from 'react';
import { TouchableOpacity } from 'react-native';
import styles from './shared.scss';

import { Text, View } from '../components/Themed';
import { RootStackScreenProps } from '../types';

const NotFoundScreen = ({ navigation }: RootStackScreenProps<'NotFound'>) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>This screen does not exist.</Text>
            <TouchableOpacity
                onPress={() => navigation.replace('Root')}
                style={styles.link}
            >
                <Text style={styles.linkText}>Go to home screen!</Text>
            </TouchableOpacity>
        </View>
    );
};

export default NotFoundScreen;
