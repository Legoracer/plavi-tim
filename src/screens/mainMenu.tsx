import { StyleSheet, View, Text, TouchableOpacity } from "react-native"

const style = StyleSheet.create({
    background: {
        height: "100%",
        width: "100%",
        // backgroundColor: "red",
        justifyContent: "center",
        alignItems: "center"
    },

    vstack: {
        flexDirection: "column",
        gap: 10,
        // backgroundColor: "white"
    },

    hstack: {
        flexDirection: "row",
        gap: 10,
        // backgroundColor: "black"
    },

    item: {
        height: 150,
        width: 150,
        // backgroundColor: "blue",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 10,
        borderRadius: 12
    },

    itemImage: {
        height: 100,
        width: 100,
        backgroundColor: "#444444"
    },

    itemText: {
        color: "#444444",
        fontSize: 20
    }
})

export default function MainMenuView({ navigation }) {

    return (
        <View style={style.background}>
            <View style={style.vstack}>
                <View style={style.hstack}>
                    {/* <TouchableOpacity style={style.item} onPress={()=>{navigation.navigate("Camera")}}>
                        <View style={style.itemImage} />
                        <Text style={style.itemText}>Scan</Text>
                    </TouchableOpacity> */}
                    <TouchableOpacity style={style.item} onPress={()=>{navigation.navigate("LocationSelector")}}>
                        <View style={style.itemImage} />
                        <Text style={style.itemText}>Location</Text>
                    </TouchableOpacity>
                </View>

                <View style={style.hstack}>
                    <TouchableOpacity style={style.item}>
                        <View style={style.itemImage} />
                        <Text style={style.itemText}>Option C</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={style.item}>
                        <View style={style.itemImage} />
                        <Text style={style.itemText}>Option D</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}