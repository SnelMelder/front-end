import React from 'react';
import styles from '../shared.scss';

import { Text, View } from '../../components/Themed';

const ReportDateTime = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Datum en tijd</Text>
        </View>
    );
};

export default ReportDateTime;
