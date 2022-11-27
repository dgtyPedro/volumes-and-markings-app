import React from "react";
import {
    Text,
    Link,
    HStack,
    Center,
    Heading,
    Switch,
    useColorMode,
    Stack,
    NativeBaseProvider,
    extendTheme,
    VStack,
    Pressable,
    Box,
    InputGroup,
    InputRightAddon,
    Input,
    Button
} from "native-base";

import { TextInput } from "react-native";

import {Ionicons} from '@expo/vector-icons';
import {AntDesign} from '@expo/vector-icons';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import {FontAwesome5} from '@expo/vector-icons';
import {Entypo} from '@expo/vector-icons';
import {MaterialIcons} from '@expo/vector-icons';

export default function Adjust({ navigation }) {
    return (
        <VStack bg="#46ACC2" flex={1} space={10} justifyContent={"space-around"}>
            <VStack px={5} space={2}>
                <Text color={"white"} textAlign={"right"}>1/4</Text>
                <Text color={"white"} textAlign={"center"}>Regular APP</Text>
                <Text color={"white"} textAlign={"center"}>Nessa etapa iremos regular a proporção de medidas para a tela de seu celular.</Text>
                <Text color={"white"} textAlign={"center"}>Com uma régua, meça a largura do quadrado abaixo.</Text>
            </VStack>
            <VStack space={5}>
                <HStack space={2} alignItems={"center"} justifyContent={"center"}>
                    <Box style={{width: 100, height: 100}} bg={"white"}></Box>
                </HStack>
                <HStack space={2} alignItems={"center"} justifyContent={"center"} color={"white"} >
                    <TextInput placeholder="Largura (cm)" placeholderTextColor="white"  keyboardType="numeric" style={{color: "white"}}/>
                </HStack>
            </VStack>
            <Button onPress={() => navigation.navigate('Format')}>Ir</Button>
        </VStack>
    )
}