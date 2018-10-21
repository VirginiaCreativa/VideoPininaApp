import React, { Component } from 'react'
import { View, Text } from 'react-native';

import Layout from './../components/categorias/categorias_layout';
import Categories from './../components/categorias/categorias_items';

class Categorias extends Component {
  render() {
    return (
      <View>
        <Layout>
          <Categories></Categories>
        </Layout>
      </View>
    )
  }
}
export default Categorias;
