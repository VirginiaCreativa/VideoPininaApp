import React, { Component }  from 'react';
import { View } from 'react-native';
import FontText from './src/components/common/fontload'
import Home from './src/screens/home'
import Header from './src/components/header/header'

 class App extends Component {
  render() {
    return (
      <Home>
        <Header/>
        <FontText style={{fontFamily: 'SourceSans-Bold'}}>lIn proident ullamco sit esse eiusmod laboris adipisicing deserunt labore.</FontText>
      </Home>  
    );
  }
}
export default App;