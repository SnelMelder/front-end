import React from 'react';
import styles from '../shared.scss';

import { Text, View } from '../../components/Themed';

const ReportLocationOfInjury = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Plaats van het letsel</Text>
        </View>
    );
};

export default ReportLocationOfInjury;
