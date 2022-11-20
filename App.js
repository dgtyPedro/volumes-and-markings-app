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
import Ruler from "./pages/Ruler";
import Volume from "./pages/Volume";
import Angle from "./pages/Angle";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import './assets/global.css'

export default function App() {

  const Stack = createNativeStackNavigator();

  return (

          <NativeBaseProvider>
            <NavigationContainer>
              <Stack.Navigator screenOptions={{
                headerShown: false
              }}
              >
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Ruler" component={Ruler} />
                <Stack.Screen name="Volume" component={Volume} />
                <Stack.Screen name="Angle" component={Angle} />
              </Stack.Navigator>
            </NavigationContainer>
          </NativeBaseProvider>


  );
}
