import React from 'react';
import { Pressable } from 'react-native';

import { AntDesign } from '@expo/vector-icons';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import useColorScheme from '../../hooks/useColorScheme';

const ButtonPlus = () => {
  const colorScheme = useColorScheme();

  return (
    <Pressable
      style={({ pressed }) => ({
        opacity: pressed ? 0.5 : 1,
      })}
    >
      <AntDesign name="pluscircle" size={25} color={Colors[colorScheme].text} />
    </Pressable>
  );
};

export default ButtonPlus;
