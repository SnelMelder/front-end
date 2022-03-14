import React from 'react';
import styles from './shared.scss';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

const TabTwoScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Tab Two</Text>
            <View
                style={styles.separator}
                lightColor="#eee"
                darkColor="rgba(255,255,255,0.1)"
            />
            <EditScreenInfo path="/screens/TabTwoScreen.tsx" />
        </View>
    );
};

export default TabTwoScreen;
