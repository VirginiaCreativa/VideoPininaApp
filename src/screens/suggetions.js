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
        cover: 'https://dummyimage.com/100x150/ddd/333&text=Simplemente',
        tag: 'adv',
        defin: 'Con solamente lo que se exprese, nada más.',
        sinom: null
      },
      {
        key: '2',
        title: 'Excursion',
        cover: 'https://dummyimage.com/100x150/ddd/333&text=Excursion',
        tag: 'f',
        defin: 'Viaje de corta duración con fines didácticos o recreativos',
        sinom: ['paseo', 'caminata']
      },
      {
        key: '3',
        title: 'Implicar',
        cover: 'https://dummyimage.com/100x150/ddd/333&text=Implicar',
        tag: 'adj',
        defin: 'Meter a alguien en un asunto',
        sinom: ['Mezclar']
      },
      {
        key: '4',
        title: 'Cesar',
        cover: 'https://dummyimage.com/100x150/ddd/333&text=Cesar',
        tag: 'vb',
        defin: 'Acaba algo o dejar de hacer una cosa',
        sinom: ['suspender', 'terminar', 'parar']
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