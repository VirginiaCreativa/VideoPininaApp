import React, { Component }  from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import store from './Store';

import Header from './src/components/header/header';
import Categorias from './src/screens/categorias';
import Home from './src/screens/home';
import Suggetions from './src/screens/suggetions';
import API from './src/config/api';

 class App extends Component {
  state = {
    suggestionLists: [],
    refreshing: true
  }
  
  componentDidMount() {
    const suggestionData = API.getSuggetions(4);
    this.setState({
      suggestionLists: suggestionData,
      refreshing: false
    })
  }
  render() {
    if(this.state.refreshing);
    return (
      <Provider store={store}>
        <View style={classStyle.Body}>
          <Header/>
          <Home>
            <Categorias/>
            <Suggetions lists={this.state.suggestionLists} />
          </Home>  
        </View>
      </Provider>
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