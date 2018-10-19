import React, { Component }  from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import SvgUri from 'react-native-svg-uri';
import StyleSheet from './style';

 const Header = () => (
    <SafeAreaView>
      <View style={StyleSheet.Header}>
        <Text style={StyleSheet.LogoTipo}>PININA</Text>
        <SvgUri
          source={require('../../../assets/logo.svg')}
          width = "32"
          height = "32"
        />

      </View>
    </SafeAreaView>
  );
 

export default Header;