import React, { Component }  from 'react';
import { StyleSheet, View } from 'react-native';

import Home from './src/screens/home'
import Header from './src/components/header/header'
import News from './src/screens/news'

 class App extends Component {
  render() {
    return (
      <View style={classStyle.Body}>
        <Home>
          <Header/>
          <News />
        </Home>  
      </View>
    );
  }
}
const classStyle = StyleSheet.create({
  Body: {
    flex: 1,
    backgroundColor: '#282756'
  }
})
export default App;