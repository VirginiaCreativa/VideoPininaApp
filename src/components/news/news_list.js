import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import FontText from './../common/fontload'

const news_layout = ({ title, cover, year, stars }) => {
  return (
    <View style={classStyle.Container}>
      <View style={classStyle.Col}>
        <Image style={classStyle.Cover} source={{uri: cover }}></Image>
      </View>
      <View style={classStyle.Col}>
        <FontText style={classStyle.Title}>{title}</FontText>

      </View>
    </View>
  );
};
const classStyle = StyleSheet.create({
  Container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    padding: 20,
    backgroundColor: '#fff',
    marginBottom: 20,
    borderRadius: 6,
  },
  Title: {
    fontFamily: 'FjallaOne',
    fontSize: 18,
    color: '#282756'
  },
  Cover: {
    width: 100, 
    height: 100
  }  
})

export default news_layout;