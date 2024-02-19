import { useEffect, useState } from "react"
import { Text, View, StyleSheet, TouchableOpacity } from "react-native"
import { Camera, useCameraDevice } from "react-native-vision-camera"

const style = StyleSheet.create({
    camera: {
        height: "100%",
        width: "100%"
    },

    overlay: {
        position: "absolute",
        flex: 1,
        height: "100%",
        width: "100%",
        flexDirection: "column-reverse",
        alignItems: "center"
    },

    bottomDrawer: {
        width: "100%",
        height: 130,
        padding: 20,
        backgroundColor: "#444444",
        alignItems: "flex-start",
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    
    takePhoto: {
        width: 67,
        height: 67,
        backgroundColor: "white",
        borderRadius: 100
    },

    takePhotoOuter: {
        top: -60,
        alignItems: "center",
        justifyContent: "center",
        width: 80,
        height: 80,
        // backgroundColor: "red",
        borderRadius: 100,
        borderColor: "white",
        borderWidth: 5,
    },

    bottomDrawerItem: {
        // flex: 1,
        height: 70,
        width: 80,
        // backgroundColor: "red",
        textAlign: "center",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",
    },

    bottomDrawerItemImage: {
        height: 50,
        width: 50,
        backgroundColor: "white"
    },

    text: {
        color: "white",
    }
})

export default function CameraView({ navigation }) {
    const device = useCameraDevice("back")

    function takePhoto() {

    }

    // set identifier when clicked,
    // inner frame should get smaller for a second
    return (
        <View>
            <Camera style={style.camera}
                isActive={true}
                device={device}
            />
            
            <View style={style.overlay}>
                <View style={style.bottomDrawer}>
                    <TouchableOpacity style={[style.bottomDrawerItem]} onPress={()=>{navigation.goBack()}}>
                        <View style={style.bottomDrawerItemImage}/>
                        <Text style={style.text}>Manual</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={style.takePhotoOuter}>
                        <View style={style.takePhoto}/>
                    </TouchableOpacity>

                    <TouchableOpacity style={[style.bottomDrawerItem]}>
                        <View style={style.bottomDrawerItemImage}/>
                        <Text style={style.text}>History</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}