import React from 'react';
import { View, StyleSheet} from 'react-native';
import FontText from './../common/fontload'

const news_layout = ({ title, children }) => {
  return (
    <View style={classStyle.Container}>
      <FontText style={classStyle.Title}>{title}</FontText>
      <View style={classStyle.Col}>
        {children}
      </View>
    </View>
  );
};
const classStyle = StyleSheet.create({
  Container: {
    flexDirection: 'column',
    paddingHorizontal: 20,
    justifyContent: 'flex-start',
  },
  Col: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 4,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: '#000',
    shadowOpacity: .5,
  },
  Title: {
    fontFamily: 'FjallaOne',
    fontSize: 30,
    marginRight: 4,
    marginBottom: 10,
    color: '#43dba1'
  }
})

export default news_layout;