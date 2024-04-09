import { TouchableOpacity, View, Text, Image, StyleSheet } from "react-native"

const style = StyleSheet.create({
    container: {
        width: 80,
        height: 80,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
    },

    image: {
        width: 50,
        height: 50
    },

    text: {

    }
})

export default function MenuButton({ text, image, callback }) {
    return (
        <TouchableOpacity style={style.container} onPress={callback}>
            <Image style={style.image} source={image ?? ""} />
            <Text style={style.text}>{text}</Text>
        </TouchableOpacity>
    )
}