import React, { Component }  from 'react';
import { StyleSheet, View } from 'react-native';

import Header from './src/components/header/header';
import Categorias from './src/screens/categorias'
import Home from './src/screens/home';
import Suggetions from './src/screens/suggetions';
import API from './src/config/api';

 class App extends Component {
  state = {
    suggestionLists: [],
    refreshing: true
  }
  
  componentDidMount() {
    const suggestionData = API.getSuggetions(5);
    this.setState({
      suggestionLists: suggestionData,
      refreshing: false
    })
  }
  render() {
    if(this.state.refreshing);
    return (
      <View style={classStyle.Body}>
        <Header/>
        <Home>
          <Categorias/>
          <Suggetions lists={this.state.suggestionLists} />
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