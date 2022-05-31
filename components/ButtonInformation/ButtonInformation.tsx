import React from 'react';
import { Pressable } from 'react-native';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

const ButtonInformation = () => {
  return (
    <Pressable
      style={({ pressed }) => ({
        opacity: pressed ? 0.5 : 1,
      })}
    >
      <FontAwesomeIcon icon={faInfoCircle} size={26} />
    </Pressable>
  );
};

export default ButtonInformation;
