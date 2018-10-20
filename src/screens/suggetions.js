import React, { Component } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import Layout from '../components/suggetions/suggetion_layout';
import Lists from '../components/suggetions/suggestion_lists';

class News extends Component {
  renderItem = ({ item }) => (
    <Lists {...item}/>
  )
  render() {
    const lists = [
      {
        key: '1',
        title: 'Simplemente',
        cover: 'https://dummyimage.com/100x100/ddd/333&text=Simplemente',
        tag: 'adj',
        defin: 'Nisi Lorem cillum enim reprehenderit irure dolore duis velit ut ex commodo cupidatat nisi.',
        sinom: ['Palabra1', 'Palabra2', 'Palabra3']
      },
      {
        key: '2',
        title: 'Excursion',
        cover: 'https://dummyimage.com/100x100/ddd/333&text=Excursion',
        tag: 'adj',
        defin: 'Aute sint voluptate ex Lorem consectetur ut esse amet mollit ex enim fugiat amet mollit.',
        sinom: ['Palabra1', 'Palabra2', 'Palabra3']
      },
      {
        key: '3',
        title: 'Implicar',
        cover: 'https://dummyimage.com/100x100/ddd/333&text=Implicar',
        tag: 'adj',
        defin: 'Cupidatat nostrud veniam ullamco enim reprehenderit esse nostrud ut cupidatat cillum cupidatat.',
        sinom: ['Palabra1', 'Palabra2', 'Palabra3']
      },
    ]
    return (
      <View>
        <Layout title="+ Definiciones">
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