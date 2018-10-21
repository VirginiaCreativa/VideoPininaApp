import React from 'react';
import { View, StyleSheet} from 'react-native';
import FontText from '../common/fontload';

const categorias_layout = ({ children }) => {
  return (
    <View style={classStyle.Container}>
      <View>
        {children}
      </View>
    </View>
  );
};
const classStyle = StyleSheet.create({
  Container: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
})

export default categorias_layout;