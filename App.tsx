import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import SplashScreen from "./SplashScreen";
import LoginScreen from "./screen/LoginScreen";
import SignupScreen from "./screen/SignupScreen";
import HomeScreen from "./screen/HomeScreen";
import AccountScreen from "./screen/AccountScreen";
import AddLinkScreen from "./screen/AddLinkScreen";
import LinkPreviewScreen from "./screen/LinkPreviewScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignupScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Account" component={AccountScreen} />
        <Stack.Screen name="AddLink" component={AddLinkScreen} />
        <Stack.Screen name="PreviewLink" component={LinkPreviewScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
