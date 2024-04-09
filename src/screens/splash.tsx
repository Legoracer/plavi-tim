import { View, Text, StyleSheet, Button, Image } from "react-native"
//import NavigationController from "../controllers/NavigationController";
import { useEffect, useState } from "react";
import React from "react";

const style = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center"
    },
    logo: {
        width: '80%',
        maxHeight: 'auto',
        resizeMode: 'contain',
        marginHorizontal: '70%',
        marginVertical: '10%'
    }
})

export default function SplashView() {
    return (
        <View style={style.background}>
            <Image source={require('../assets/logo.png')} style={style.logo} />
        </View>
    );
}