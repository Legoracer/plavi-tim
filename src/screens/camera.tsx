import { View, Text } from "react-native"
import { Camera, useCameraDevice, useCodeScanner } from "react-native-vision-camera";

export default function SplashScreen() {
    let device = useCameraDevice("back")

    const codeScanner = useCodeScanner({
        codeTypes: ['qr', 'ean-13'],
        onCodeScanned: (codes) => {
            console.log("########")
            codes.forEach((v, i) => {
                console.log(i, v.value)
            })
        }
    })

    return (
        <View>
            <Camera
                isActive={true}
                device={device}
                codeScanner={codeScanner}
            ></Camera>
        </View>
    );
}