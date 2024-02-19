import { createNativeStackNavigator } from "@react-navigation/native-stack";


class NavigationController {
    stack = createNativeStackNavigator();
    initialRoute = "Splash"


}

export default new NavigationController()