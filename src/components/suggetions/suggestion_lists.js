import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import FontText from '../common/fontload'

const suggetionslists = ({ title, cover, tag, defin, sinom }) => {
  const sinomino = sinom.join(', ');
  return (
    <View style={classStyle.Container}>
      <View style={classStyle.Cover}>
        <Image style={classStyle.Image} source={{uri: cover }}></Image>
      </View>
      <View style={classStyle.Info}>
        <FontText style={[classStyle.Tag, classStyle.spaceBottom]}>{tag}</FontText>
        <FontText style={[classStyle.Title, classStyle.spaceBottom]}>{title}</FontText>
        <FontText style={[classStyle.Defin, classStyle.spaceBottom]}>{defin}</FontText>
        <FontText style={[classStyle.Sin, classStyle.spaceBottom]}>{sinomino}</FontText>
      </View>
    </View>
  );
};
const classStyle = StyleSheet.create({
  Container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    padding: 15,
    backgroundColor: '#fff',
    marginBottom: 20,
    borderRadius: 6,
  },
  Cover: {
    marginRight: 10,
  },
  Image: {
    width: 100, 
    height: 100
  },
  Tag: {
    alignSelf: 'flex-start',
    fontFamily: 'FjallaOne',
    fontSize: 11,
    color: '#333',
    backgroundColor: '#ddd',
    overflow: 'hidden',
    paddingHorizontal: 6,
    paddingVertical: 4,
    borderRadius: 4,
  },
  Title: {
    fontFamily: 'FjallaOne',
    fontSize: 18,
    color: '#282756'
  },
  spaceBottom: {
    marginBottom: 8,
  },
  Info:{
    width: 0,
    flexGrow: 1,
    flex: 1,
    
  }      
})

export default suggetionslists;