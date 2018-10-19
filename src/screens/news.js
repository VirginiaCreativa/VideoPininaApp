import React, { Component } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import Layout from './../components/news/news_layout';
import FontText from './../components/common/fontload';

class News extends Component {
  render() {
    const lists = [
      { key: '1', title: 'Simplemente' },
      { key: '2', title: 'Excursion' },
      { key: '3', title: 'Implicar' },
    ]
    return (
      <View>
        <Layout title="News">
          <FlatList 
            data={lists}
            renderItem={({ item }) => 
              
              <FontText style={classStyle.Title}>{item.title}</FontText>
            }
          />
        </Layout>
      </View>
    )
  }
}
const classStyle = StyleSheet.create({
  Title: {
    fontSize: 22,
  }
})
export default News;