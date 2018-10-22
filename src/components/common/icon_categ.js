
import React from 'react';
import { View, StyleSheet, Image  } from 'react-native';
import SvgUri from 'react-native-svg-uri';

const categoria_icon = ({ iconType, bgType }) => {
  return (
    <View style={classStyle.bgCircle}
      >
      <View style={classStyle.Icon}>
        <SvgUri
          source={iconType}
          width="22"
          height="22"
          fill="#282756"
        />
      </View>
    </View>
  );
};
const classStyle = StyleSheet.create({
  bgCircle: {
    height: 60,
    width: 60,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: '#282756',
    borderStyle: 'solid',
    marginHorizontal: 10,
  } 
})
export default categoria_icon;