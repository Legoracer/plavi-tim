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
        borderWidth: 1,
        borderTopColor: '#E6E7E8',
        borderBottomColor: '#E6E7E8',
        borderRightColor: '#E6E7E8',
        marginBottom: 'auto'
    },

    location: {
        paddingLeft: 16,
        padding: 16,
        borderLeftColor: '#00639C',
        borderLeftWidth: 5
    },

    separator: {
        width: "100%",
        height: 1,
        backgroundColor: '#E6E7E8'
    }
})

function renderSeparator() {
    return (
      <View
        style={{
          height: 1,
          backgroundColor: "#CED0CE",
        }}
      />
    );
  };

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
        { key: '8', value: 'Clothing' },
    { key: '9', value: 'Books' },
    { key: '10', value: 'Furniture' },
    { key: '11', value: 'Toys' },
    { key: '12', value: 'Stationery' },
    { key: '13', value: 'Jewelry' },
    { key: '14', value: 'Sports Equipment' },
    { key: '15', value: 'Home Decor' },
    { key: '16', value: 'Pet Supplies' },
    { key: '17', value: 'Health & Beauty' },
    { key: '18', value: 'Electronics Accessories' },
    { key: '19', value: 'Baby Products' },
    { key: '20', value: 'Outdoor Gear' },
    { key: '21', value: 'Kitchenware' },
    { key: '22', value: 'Office Supplies' },
    { key: '23', value: 'Craft Supplies' },
    { key: '24', value: 'Tools & Hardware' },
    { key: '25', value: 'Gardening Supplies' },
    { key: '26', value: 'Party Supplies' },
    { key: '27', value: 'Musical Instruments' },
    { key: '28', value: 'Fitness Equipment' },
    { key: '29', value: 'Art Supplies' },
    { key: '30', value: 'Travel Accessories' },
    { key: '31', value: 'Educational Toys' },
    { key: '32', value: 'Video Games & Consoles' },
    { key: '33', value: 'Home Improvement' },
    { key: '34', value: 'Car Accessories' }
    ]
    return (
        <View style={style.background}>
            <Text style={style.title}>Select a location:</Text>
            <FlatList data={data} renderItem={(item) => <Location navigation={navigation}/>} style={style.list} ItemSeparatorComponent={renderSeparator}/>
        </View>
    )
}