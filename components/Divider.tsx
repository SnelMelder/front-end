import React from 'react';
import { View } from 'react-native';

const Divider = props => {
  const { colorDrawer, heightDrawer, widthDrawer } = props;
  return (
    <View style={{ flexDirection: 'row' }}>
      <View
        style={{ backgroundColor: colorDrawer, height: heightDrawer, width: widthDrawer, flex: 1, alignSelf: 'center' }}
      />
    </View>
  );
};

export default Divider;
