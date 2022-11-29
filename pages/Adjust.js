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
} from "native-base";

import { TextInput, Button, TouchableOpacity } from "react-native";

import {Ionicons} from '@expo/vector-icons';
import {AntDesign} from '@expo/vector-icons';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import {FontAwesome5} from '@expo/vector-icons';
import {Entypo} from '@expo/vector-icons';
import {MaterialIcons} from '@expo/vector-icons';
import {useFonts} from "expo-font";



export default function Adjust({ navigation }) {
    const [loaded] = useFonts({
        Courgette: require('../assets/fonts/Courgette-Regular.ttf'),
    });
    if (!loaded) {
        return null;
    }
    return (
        <VStack bg="#46ACC2" flex={1} space={15} justifyContent={"space-around"} pt={5}>
            <VStack px={5} space={2}>
                <HStack justifyContent="space-between">
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Text color={"white"} textAlign={"right"} fontSize={20} style={{ fontFamily: 'Courgette'}}>Voltar</Text>
                    </TouchableOpacity>
                    <Text color={"white"} textAlign={"right"} fontSize={20} style={{ fontFamily: 'Courgette'}}>1/3</Text>
                </HStack>
                <Text color={"white"} textAlign={"center"} fontSize={24} style={{ fontFamily: 'Courgette'}}>Regular APP</Text>
                <Text color={"white"} textAlign={"center"} fontSize={18} style={{ fontFamily: 'Courgette'}}>Nessa etapa iremos regular a proporção de medidas para a tela de seu celular.</Text>
                <Text color={"white"} textAlign={"center"} fontSize={18} style={{ fontFamily: 'Courgette'}}>Com uma régua, meça a largura do quadrado abaixo.</Text>
            </VStack>
            <VStack space={5}>
                <HStack space={2} alignItems={"center"} justifyContent={"center"}>
                    <Box style={{width: 100, height: 100}} bg={"white"}></Box>
                </HStack>
                <HStack space={2} alignItems={"center"} justifyContent={"center"} color={"white"} >
                    <TextInput style={{fontFamily: 'Courgette', color: "white", borderBottomWidth: 1, width: 130, borderBottomColor: 'white',
                        fontSize: 16}} placeholder="Largura (cm)" placeholderTextColor="white"  keyboardType="numeric"/>
                </HStack>
            </VStack>
            <TouchableOpacity onPress={() => navigation.navigate('Format')}>
                <Text textAlign={"center"} fontSize={24} p={2} bg={"white"} w={40} margin={"auto"} borderRadius={10}
                color={"#46ACC2"}>Avançar</Text>
            </TouchableOpacity>
        </VStack>
    )
}