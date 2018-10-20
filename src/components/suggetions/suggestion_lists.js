import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import FontText from '../common/fontload'

const suggetionslists = ({ title, cover, tag, defin, sinom }) => {
  const sinomino = sinom.join(', ');
  return (
    <View style={classStyle.Container}>
      <View style={classStyle.Col}>
        <Image style={classStyle.Cover} source={{uri: cover }}></Image>
      </View>
      <View style={classStyle.Col}>
        <FontText style={classStyle.Tag}>{tag}</FontText>
        <FontText style={classStyle.Title}>{title}</FontText>
        <FontText style={classStyle.Defin}>{defin}</FontText>
        <FontText style={classStyle.Sin}>{sinomino}</FontText>
      </View>
    </View>
  );
};
const classStyle = StyleSheet.create({
  Container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingVertical: 20,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    marginBottom: 20,
    borderRadius: 6,
  },
  Col: {
    marginHorizontal: 5,
    justifyContent: 'space-between'
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

export default suggetionslists;