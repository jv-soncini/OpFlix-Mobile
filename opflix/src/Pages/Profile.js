import React, { Component } from 'react';

import { View, Text, StyleSheet, Image } from 'react-native';

// import { Container } from './styles';

export default class Pages extends Component {

  static navigationOptions = {
    tabBarIcon: () => (
      <Image
        source={require("../assets/img/PerfilPreto.png")}
        style={styles.tabBarStylo}
      />
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Teste Profile</Text>
      </View>
    )
  }
}


const styles = StyleSheet.create({
    tabBarStylo: {
      width: 35,
      height: 35,
      tintColor: "black"
    },
    container: {
      height: "100%",
      backgroundColor: "#f1f1f1"
    }

})
