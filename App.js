import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./src/pages/HomeScreen";
import Cam from "./src/pages/camera";
import EventosList from "./src/pages/EventosList";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Cam" component={Cam} options={{ title: "FOTO" }} />
        <Stack.Screen name="EventosList" component={EventosList} options={{title: "EVENTOS"}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
