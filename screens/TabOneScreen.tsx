import React from 'react';
import styles from './shared.scss';

import EditScreenInfo from '../components/EditScreenInfo/EditScreenInfo';
import { Text, View } from '../components/Themed';

const TabOneScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Tab One</Text>
            <View
                style={styles.separator}
                lightColor="#eee"
                darkColor="rgba(255,255,255,0.1)"
            />
            <EditScreenInfo path="/screens/TabOneScreen.tsx" />
        </View>
    );
};

export default TabOneScreen;
