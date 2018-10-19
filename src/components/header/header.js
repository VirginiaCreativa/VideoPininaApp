import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import StyleSheet from './style';

const header = () => {
  return (
    <SafeAreaView>
      <View style={StyleSheet.Header}>
        <Text>HEADER</Text>
      </View>
    </SafeAreaView>
  );
};

export default header;