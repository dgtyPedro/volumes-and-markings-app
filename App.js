import React from "react";
import {
  Text,
  Link,
  HStack,
  Center,
  Heading,
  Switch,
  useColorMode,
  NativeBaseProvider,
  extendTheme,
  VStack,
  Box,
} from "native-base";
import NativeBaseIcon from "./components/NativeBaseIcon";
import { Platform } from "react-native";
import Home from "./pages/Home";
import { useFonts } from 'expo-font';
import Format from "./pages/Format";
import Adjust from "./pages/Adjust";
import Results from "./pages/Results";
import Cube from "./pages/Cube";
import Cylinder from "./pages/Cylinder";
import About from "./pages/About";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import './assets/global.css'

export default function App() {

  const Stack = createNativeStackNavigator();

  const [loaded] = useFonts({
    ReggaeOne: require('./assets/fonts/ReggaeOne-Regular.ttf'),
  });
  if (!loaded) {
    return null;
  }

  return (
          <NativeBaseProvider>
            <NavigationContainer>
              <Stack.Navigator screenOptions={{
                headerShown: false
              }}
              >
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Format" component={Format} />
                <Stack.Screen name="Adjust" component={Adjust} />
                <Stack.Screen name="Results" component={Results} />
                <Stack.Screen name="Cylinder" component={Cylinder} />
                <Stack.Screen name="About" component={About} />
                <Stack.Screen name="Cube" component={Cube} />
              </Stack.Navigator>
            </NavigationContainer>
          </NativeBaseProvider>


  );
}
