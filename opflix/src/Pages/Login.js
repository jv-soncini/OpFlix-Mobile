import React, { Component } from 'react';
import { View, Button, AsyncStorage, StyleSheet, Image, KeyboardAvoidingView } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';





export default class Login extends Component {






    constructor() {
        super();
        this.state = {
            email: "Robertinho@naosei.com",
            senha: "RobertinhoMassa"
        }
    }

    Login = async () => {
        await fetch('http://192.168.4.200:5000/api/usuario/login', {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                Email: this.state.email,
                Senha: this.state.senha
            })
        })
            .then(resposta => resposta.json())
            .then(data => this.IrParaMain(data.token))
            .catch(erro => console.warn(erro))
    }

    IrParaMain = async tokenzada => {
        if (tokenzada != null) {
            try {
                await AsyncStorage.setItem("@Opflix: tokenzada", tokenzada)
                this.props.navigation.navigate('MainNav');
            } catch (error) { }
        }
    }

    render() {
        return (

            <View>
                <Image
                    source={require("../assets/img/opflixlogo.png")}
                />


                <TextInput
                    placeholder="Email"
                    onChange={email => this.setState({ email })}
                    value={this.state.email}
                    style={styles.Bordinha}
                />

                <TextInput
                    placeholder="Senha"
                    onChange={senha => this.setState({ senha })}
                    value={this.state.senha}
                    style={styles.Bordinha}

                />

                <Button
                    title='login'
                    color="#D91A2A"
                    onPress={this.Login}
                />





            </View>





        );



    }
}
const styles = StyleSheet.create({
    Viewzadas: {


        // justifyContent: "space-around",
        marginLeft: 35,
        width: "80%",
        height: "30%",

    },
    Bordinha: {
        borderBottomColor: "#000",
        borderBottomWidth: 1,
        fontSize: 20,

    },




})
