import { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native"
import { Camera, useCameraDevice, useCodeScanner, CodeScanner } from "react-native-vision-camera";

let style = StyleSheet.create({
    fullscreen: {
        flex: 1,
        height: '100%',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'center'
    },

    block: {
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        borderColor: 'black',
        color: 'white',
        marginBottom: 50,
        padding: 10,
        borderRadius: 1,
        fontSize: 20
    }
})

export default function SplashScreen() {
    let device = useCameraDevice("back")
    let [qr, setQR] = useState("")

    const codeScanner = useCodeScanner({
        codeTypes: ['qr', 'ean-13'],
        onCodeScanned: (codes) => {
            setQR(codes[0].value)
        },
    })

    return (
        <View style={style.fullscreen}>
            <Camera
                style={style.fullscreen}
                isActive={true}
                device={device}
                codeScanner={codeScanner}
            >
                <Text style={style.block}>{qr}</Text>
            </Camera>
        </View>
    );
}

