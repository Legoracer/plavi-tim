import { useState } from "react";
import { Text, TextInput, View, StyleSheet, Button, FlatList, TouchableOpacity } from "react-native"
import { SelectList } from 'react-native-dropdown-select-list'

const style = StyleSheet.create({
    background: {
        flexDirection: "column",
        justifyContent: "center",
        paddingTop: 50,
    },

    input: {
        color: "red",
        borderRadius: 8,
        borderColor: "rgba(0, 0, 0, .5)",
        height: 40,
        margin: 12,
        borderWidth: 1,
    },

    title: {
        fontSize: 24,
        paddingLeft: 16
    },

    dropdown_input: {
        padding: 0,
        margin: 0,
    },

    list: {

    },

    location: {
        paddingLeft: 16,
        padding: 16
    },

    separator: {
        width: "100%",
        height: 1,
        backgroundColor: "black"
    }
})

function Location({navigation}) {
    return (
        <TouchableOpacity style={style.location} onPress={()=>{navigation.navigate("MainMenu")}}>
            <Text>Example Location</Text>
        </TouchableOpacity>
    )
}

function Separator() {
    return (
        <View style={style.separator}/>
    )
}

export default function LocationSelectorView({ navigation }) {
    const [selected, setSelected] = useState("");
    const [email, setEmail] = useState("")

    const data = [
        { key: '1', value: 'Mobiles', disabled: true },
        { key: '2', value: 'Appliances' },
        { key: '3', value: 'Cameras' },
        { key: '4', value: 'Computers', disabled: true },
        { key: '5', value: 'Vegetables' },
        { key: '6', value: 'Diary Products' },
        { key: '7', value: 'Drinks' },
    ]
    return (
        <View style={style.background}>
            <Text style={style.title}>Select a location:</Text>
            <FlatList data={data} renderItem={(item) => <Location navigation={navigation}/>} style={style.list} ItemSeparatorComponent={Separator}/>
            {/* <SelectList
                boxStyles={style.input}
                inputStyles={style.dropdown_input}
                placeholder="Select the location"
                setSelected={setSelected}
                data={data}
                save="value"
            />

            <TextInput
                style={style.input}
                onChangeText={setEmail}
                value={email}
                placeholder="Enter email"
                placeholderTextColor={"black"}
            />

            <Button title="Continue" onPress={()=>{navigation.navigate("MainMenu")}}/> */}
        </View>
    )
}