import { View, Text, StyleSheet, Button } from "react-native"
import NavigationController from "../controllers/NavigationController";
import { useEffect, useState } from "react";

const style = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center"
    },

    title: {
        fontSize: 80,
        fontWeight: "bold"
    },
    btn: {
        width: 50,
        height: 50,
        backgroundColor: "red"
    }
})

export default function SplashView({ navigation }) {
    let [loaded, setLoaded] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate("LocationSelector")
        }, 2000);
    })

    return (
        <View style={style.background}>
            <Text style={style.title}>INA</Text>
        </View>
    );
}