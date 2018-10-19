import React, { Component }  from 'react';
import { Font } from 'expo';
import { Text } from 'react-native';

 class FontText extends Component {
  state = {
    fontLoaded: false,
  };

  async componentDidMount() {
    await Font.loadAsync({
      'FjallaOne': require('./../../../assets/fonts/FjallaOne-Regular.ttf'),
      'SourceSans-Regular': require('./../../../assets/fonts/SourceSansPro-Regular.ttf'),
      'SourceSans-Bold': require('./../../../assets/fonts/SourceSansPro-Bold.ttf'),
    });
    this.setState({ fontLoaded: true });
  }

  render() {
    const { fontLoaded } = this.state;
    return fontLoaded ? <Text style={this.props.style}>{this.props.children}</Text> : null;
  }
}
export default FontText;