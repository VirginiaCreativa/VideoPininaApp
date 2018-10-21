
import React from 'react';
import { View, StyleSheet, Image  } from 'react-native';
import SvgUri from 'react-native-svg-uri';

const categoria_icon = ({ iconType, bgType }) => {
  return (
    <View style={{
      backgroundColor: bgType,
      height: 80,
      width: 80,
      borderRadius: 100,
      justifyContent: 'center',
      alignItems: 'center'
    }}
      >
      <View style={classStyle.Icon}>
        <SvgUri
          source={iconType}
          width="30"
          height="30"
          fill="#fff"
        />
      </View>
    </View>
  );
};
const classStyle = StyleSheet.create({
})
export default categoria_icon;