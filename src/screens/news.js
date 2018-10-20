import React, { Component } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import Layout from './../components/news/news_layout';
import FontText from './../components/common/fontload';
import NewsList from '././../components/news/news_list';

class News extends Component {
  renderItem = ({ item }) => (
    <NewsList {...item}/>
  )
  render() {
    const lists = [
      {
        key: '1',
        title: 'Simplemente',
        cover: 'https://dummyimage.com/100x100/ddd/333&text=Simplemente'
      },
      {
        key: '2',
        title: 'Excursion',
        cover: 'https://dummyimage.com/100x100/ddd/333&text=Excursion'
      },
      {
        key: '3',
        title: 'Implicar',
        cover: 'https://dummyimage.com/100x100/ddd/333&text=Implicar'
      },
    ]
    return (
      <View>
        <Layout title="Nuevos Definiciones">
          <FlatList 
            data={lists}
            renderItem={this.renderItem}
          />
        </Layout>
      </View>
    )
  }
}
const classStyle = StyleSheet.create({
})
export default News;