import React from 'react';
import styles from './shared.scss';

import { Text, View } from '../components/Themed';
import ButtonPlus from '../components/ButtonPlus/ButtonPlus';
import { RootTabScreenProps } from '../types';

const HomeScreen = ({ navigation }: RootTabScreenProps<'TabHome'>) => {
  const navigate = () => navigation.navigate('Modal');
  // const navigate = () => {
  //     navigation.navigate('Root', { screen: 'TabReport' });
  // };

  return (
    <View style={styles.container}>
      <ButtonPlus handle={navigate} />
    </View>
  );
};

export default HomeScreen;
