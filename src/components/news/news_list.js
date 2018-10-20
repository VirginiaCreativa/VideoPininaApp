import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import FontText from './../common/fontload'

const news_layout = ({ title, cover, year, stars }) => {
  return (
    <View style={classStyle.Container}>
      <View style={classStyle.Col}>
        <Image style={classStyle.Cover} source={{uri:'https://dummyimage.com/200x200/#38404/000000&text=Simplemente'}}></Image>
      </View>
      <View style={classStyle.Col}>
        <FontText style={classStyle.Title}>{title}</FontText>

      </View>
    </View>
  );
};
const classStyle = StyleSheet.create({
  Container: {
    flexDirection: 'column',
    padding: 20,
    justifyContent: 'flex-start',
    backgroundColor: '#fff',
    marginBottom: 20,
    borderRadius: 6,
  },
  Col: {
   
  },
  Title: {
    fontFamily: 'FjallaOne',
    fontSize: 18,
    color: '#282756'
  }
})

export default news_layout;