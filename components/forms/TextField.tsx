import {StyleSheet, View} from 'react-native';
import { TextInput, TextInputProps } from 'react-native-paper';


const TextField = (props: TextInputProps) => {
  return (
    <View style={styles.container}>
      {/* Without the minHeight attribute, multiline will not work on iOS devices. This is a known issue with React-native-paper
      This is also an issue in React native core */}
      <TextInput {...props} multiline={true} numberOfLines={10} mode='outlined' style={{minHeight:225}}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderColor: '#909090',
    borderWidth: 1,
    padding: 16,
    borderRadius: 8,
  },
});

export default TextField;
