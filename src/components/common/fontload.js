import React, { Component }  from 'react';
import { Font } from 'expo';
import { Text } from 'react-native';

 class FontText extends Component {
  state = {
    fontLoaded: false,
  };

  async componentDidMount() {
    await Font.loadAsync({
      FjallaOne: require('./../../../assets/fonts/FjallaOne-Regular.ttf'),
      SourceSansLightItalic: require('./../../../assets/fonts/SourceSansPro-LightItalic.ttf'),
      SourceSansLight: require('./../../../assets/fonts/SourceSansPro-Light.ttf'),
      SourceSansRegular: require('./../../../assets/fonts/SourceSansPro-Regular.ttf'),
      SourceSansItalic: require('./../../../assets/fonts/SourceSansPro-Italic.ttf'),
      SourceSansBold: require('./../../../assets/fonts/SourceSansPro-Bold.ttf'),
      SourceSansBoldItalic: require('./../../../assets/fonts/SourceSansPro-BoldItalic.ttf'),
      SourceSansSemiBold: require('./../../../assets/fonts/SourceSansPro-SemiBold.ttf'),
      SourceSansSemiBoldItalic: require('./../../../assets/fonts/SourceSansPro-SemiBoldItalic.ttf'),
      SourceSansBlack: require('./../../../assets/fonts/SourceSansPro-Black.ttf'),
      SourceSansBlackItalic: require('./../../../assets/fonts/SourceSansPro-BlackItalic.ttf'),
    });
    this.setState({ fontLoaded: true });
  }

  render() {
    const { fontLoaded } = this.state;
    return fontLoaded ? <Text style={this.props.style}>{this.props.children}</Text> : null;
  }
}
export default FontText;