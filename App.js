import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SvgUri from 'react-native-svg-uri';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <SvgUri
          width="100"
          height="100"
          source={require('./assets/logo.svg')}
        />
        <Text style={{color: '#fff'}}>Virginia Velásquez Soto</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b33771',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
