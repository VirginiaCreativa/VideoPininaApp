import React, { Component }  from 'react';
import { Font } from 'expo';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/screens/home'
import Header from './src/components/header/header'

 class App extends Component {
  state = {
    fontLoaded: false,
  };

  async componentDidMount() {
    await Font.loadAsync({
      'FjallaOne': require('./assets/fonts/FjallaOne-Regular.ttf'),
    });
    this.setState({ fontLoaded: true });
  }

  render() {
    return (
      <Home>
        {
          this.state.fontLoaded ?
          <Header/> : null
        }
        <Text>Buscador</Text>
        <Text>Categorias</Text>
        <Text>Sugerencias</Text>
      </Home>  
    );
  }
}
export default App;