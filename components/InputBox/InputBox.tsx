import React from 'react';
import { TextInput } from 'react-native';
import styles from './InputBox.scss';

const InputBox = (props) => {
  return (
    <TextInput
      {...props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
      style={styles.inputBox}
      editable
    />
  );
};

export default InputBox;
