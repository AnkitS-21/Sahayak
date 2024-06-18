import "react-native-gesture-handler";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Welcome from "./Screens/Welcome";
import Login from "./Screens/Login";
import Details from "./Screens/Details";
import Otp from "./Screens/Otp";
import HomePage from "./Screens/HomePage";
import OnboardingScreen from "./Screens/OnboardingScreen";


const Stack = createNativeStackNavigator();

export const AboutStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Welcome" // Set initialRouteName to "welcome"
      screenOptions={{
        headerStyle: {
          backgroundColor: "lightblue",
        },
        headerTintColor: "white",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen name='Welcome' component={Welcome} options={{headerShown: false}}/>
      <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
      <Stack.Screen name="Details" component={Details} options={{headerShown: false}}/>
      <Stack.Screen name="Otp" component={Otp} options={{headerShown: false}}/>
      <Stack.Screen name="HomePage" component={HomePage} options={{headerShown: false}}/>
      <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} options={{headerShown: false}}/>
      
    </Stack.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      {/* Render the AboutStack component */}
      <AboutStack />
    </NavigationContainer>
  );
}