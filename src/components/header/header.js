import React, { Component }  from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import SvgUri from 'react-native-svg-uri';
import FontText from './../common/fontload'
import StyleSheet from './style';

 const Header = () => (
    <SafeAreaView>
      <View style={StyleSheet.Header}>
        <FontText style={StyleSheet.LogoTipo}>PININA</FontText>
        <SvgUri
          source={require('../../../assets/logo.svg')}
          width = "32"
          height = "32"
        />
      </View>
    </SafeAreaView>
  );
 

export default Header;