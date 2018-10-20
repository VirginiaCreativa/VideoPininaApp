import React, { Component }  from 'react';
import { StyleSheet, View } from 'react-native';

import Header from './src/components/header/header'
import Home from './src/screens/home'
import Suggetions from './src/screens/suggetions'

 class App extends Component {
  render() {
    return (
      <View style={classStyle.Body}>
        <Home>
          <Header/>
          <Suggetions />
        </Home>  
      </View>
    );
  }
}
const classStyle = StyleSheet.create({
  Body: {
    flex: 1,
    backgroundColor: '#f5f4f9'
  }
})
export default App;