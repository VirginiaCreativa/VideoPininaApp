import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import FontText from '../common/fontload'

const suggetionslists = ({ title, cover, tag, defin, sinom }) => {
  const sinomino = sinom ? sinom.join(', ') : null;
  return (
    <View style={classStyle.Container}>
      <View style={classStyle.Cover}>
        <Image style={classStyle.Image} source={{uri: cover }}></Image>
      </View>
      <View style={classStyle.Info}>
        <FontText style={[classStyle.Tag, classStyle.spaceBottom]}>{tag}.</FontText>
        <FontText style={[classStyle.Title, classStyle.spaceBottom]}>{title}</FontText>
        <FontText style={[classStyle.Defin, classStyle.spaceBottom]}>{defin}</FontText>
        <FontText style={[classStyle.Sin, classStyle.spaceBottom]}>
          <FontText style={classStyle.SinSpan}>{sinom ? 'Sinóminos:' : null} </FontText>
          {sinomino}
        </FontText>
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
    width: 150, 
    height: 150
  },
  Tag: {
    alignSelf: 'flex-start',
    fontFamily: 'SourceSansSemiBold',
    fontSize: 11,
    color: '#434A6D',
    backgroundColor: '#D3DEDD',
    overflow: 'hidden',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 2,
  },
  Title: {
    fontFamily: 'SourceSansBold',
    fontSize: 22,
    color: '#282756'
  },
  Defin: {
    fontFamily: 'SourceSansRegular',
    fontSize: 14,
    color: '#666',
    lineHeight: 22
  },
  spaceBottom: {
    marginBottom: 4,
  },
  Info:{
    width: 0,
    flexGrow: 1,
    flex: 1,
    
  },
  Sin: {
    color: '#36BEBF',
    fontSize: 13,
    fontFamily: 'SourceSansRegular',
  },
  SinSpan: {
    color: '#282756',
    fontFamily: 'SourceSansSemiBold',
  }
  
})

export default suggetionslists;