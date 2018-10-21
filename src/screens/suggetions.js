import React, { Component } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import Layout from '../components/suggetions/suggetion_layout';
import Lists from '../components/suggetions/suggestion_lists';

class News extends Component {
  renderItem = ({ item }) => (
    <Lists {...item}/>
  )
   _keyExtractor = (item, index) => index.toString();
   
  render() {
    return (
      <View>
        <Layout title="+ Definiciones">
          <FlatList 
            data={this.props.lists}
            renderItem={this.renderItem}
            keyExtractor={this._keyExtractor}
          />
        </Layout>
      </View>
    )
  }
}
const classStyle = StyleSheet.create({
})
export default News;