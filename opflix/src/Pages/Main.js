import React, { Component } from 'react';

import { View, Text, Image, StyleSheet, Picker, TouchableOpacity } from 'react-native';
import { FlatList, ScrollView } from 'react-native-gesture-handler';


// import { Container } from './styles';

export default class Main extends Component {
  static navigationOptions = {
    tabBarIcon: () => (
      <Image
        source={require("../assets/img/lista.png")}
        style={styles.taBarStylo}
      />
    )
  }
  constructor() {
    super()
    this.state = {
      Lancamentos: [],
      Categorias: [],
      user: null,
      
    }
  }


  componentDidMount = () => {
    this.Listar();
    this.ListarCategorias();
  }

  Listar = async () => {
    await fetch("http://192.168.4.200:5000/api/Lancamentos")
      .then(resposta => resposta.json())
      .then(data => this.setState({ Lancamentos: data }))
      .catch(erro => console.warn(erro))
  }


  ListarCategorias = async () => {
    await fetch("http://192.168.4.200:5000/api/categoria")
      .then(res => res.json())
      .then(data => this.setState({ Categorias: data })
        .then(erro => console.warn(erro))
      )
  }

  updateCategoria = (user) => {
    this.setState({ user: user })
  }

  AcessarPage = () => {
    console.warn("aiaiaiai")
  }


  


  render() {
    return (
      
      
      <View style={styles.container}>



        <Picker selectedValue={this.state.user} onValueChange={this.updateCategoria}>
          <Picker.Item label="Selecione um Item" value="0" />
          {this.state.Categorias.map(item =>
            <Picker.Item label={item.nome} value={item.idCategoria} />
          )}
        </Picker>
        <Text style={styles.text}>{this.state.user}</Text>
        <FlatList
          data={this.state.Lancamentos}
          style={styles.container}
          keyExtractor={item => item.idLancamento}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <View>
              <Text>{item.titulo}</Text>
              <Text>Categoria: {item.idCategoriaNavigation.nome}</Text>
              <Text>Classificação: {item.idClassificacaoNavigation.classificacao1}</Text>
              <Text>Duração: {item.tempoDeDuracao}</Text>
              <TouchableOpacity onPress={this.AcessarPage}>
                <Image
                  source={{ uri: item.imagenm }}
                  style={styles.img}
                />
              </TouchableOpacity>
            </View>
          )}
        />


      </View>


    )
  }
}

const styles = StyleSheet.create({
  taBarStylo: {
    width: 35,
    height: 35,
    tintColor: "black"


  },

  img: {
    width: 280,
    height: 220,

  },

  container: {
    backgroundColor: "#f1f1f1",
    height: "100%"
  }
})
