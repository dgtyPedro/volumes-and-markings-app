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
                <Stack.Screen name="Format" component={Format} />
                <Stack.Screen name="Adjust" component={Adjust} />
                <Stack.Screen name="Results" component={Results} />
              </Stack.Navigator>
            </NavigationContainer>
          </NativeBaseProvider>


  );
}
