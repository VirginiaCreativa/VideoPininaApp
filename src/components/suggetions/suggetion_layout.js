import React from 'react';
import { View, StyleSheet} from 'react-native';
import FontText from '../common/fontload'

const suggetionlayout = ({ title, children }) => {
  return (
    <View style={classStyle.Container}>
      <FontText style={classStyle.Title}>{title}</FontText>
      <View>
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
  Title: {
    fontFamily: 'FjallaOne',
    fontSize: 26,
    marginRight: 4,
    marginBottom: 10,
    color: '#43dba1'
  }
})

export default suggetionlayout;