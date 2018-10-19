import React, { Component }  from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/screens/home'
import Header from './src/components/header/header'

 class App extends Component {
  render() {
    return (
      <Home>
        <Header />
        <Text>Buscador</Text>
        <Text>Categorias</Text>
        <Text>Sugerencias</Text>
      </Home>  
    );
  }
}
export default App;