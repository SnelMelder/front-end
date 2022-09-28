import React from 'react';
import { Pressable } from 'react-native';

import { AntDesign } from '@expo/vector-icons';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import useColorScheme from '../../hooks/useColorScheme';

const ButtonPlusBigGreen = () => {
  const colorScheme = useColorScheme();

  return (
    <Pressable
      style={({ pressed }) => ({
        opacity: pressed ? 0.5 : 1,
      })}
    >
      <AntDesign
        name="pluscircle"
        size={100}
        style={{
          color: '#008F73',
          position: 'absolute',
          top: 5,
          right: 5,
        }}
        color={Colors[colorScheme].text}
      />
    </Pressable>
  );
};

export default ButtonPlusBigGreen;
