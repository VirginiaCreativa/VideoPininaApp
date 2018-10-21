import React, { Component }  from 'react';
import { StyleSheet, View } from 'react-native';

import Header from './src/components/header/header'
import Home from './src/screens/home'
import Suggetions from './src/screens/suggetions'
import APIBASE from './assets/data/deficiones.json';

 class App extends Component {
  state = {
    suggestionLists: [],
    refreshing: true
  }
  getDAta() {
    this.setState({
      suggestionLists: APIBASE,
      refreshing: false
    })
  }
  componentDidMount() {
    this.getDAta();
  }
  render() {
    if(this.state.refreshing);
    return (
      <View style={classStyle.Body}>
        <Home>
          <Header/>
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