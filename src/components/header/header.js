import React, { Component }  from 'react';
import { StyleSheet, View, Text, SafeAreaView } from 'react-native';
import SvgUri from 'react-native-svg-uri';
import FontText from './../common/fontload'

 const Header = () => (
  <SafeAreaView style={{marginBottom: 10}}>
    <View style={styles.Header}>
      <FontText style={styles.LogoTipo}>PININA</FontText>
      <SvgUri
        source={require('../../../assets/logo.svg')}
        width = "36"
        height = "36"
      />
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  Header: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingVertical: 10,
  },
  LogoTipo: {
    fontFamily: 'FjallaOne',
    fontSize: 40,
    marginRight: 4,
    color: '#282756'
  }
})
export default Header;