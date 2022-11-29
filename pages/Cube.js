import React from "react";
import {
    Text,
    Link,
    HStack,
    Center,
    Heading,
    Switch,
    Stack,
    useColorMode,
    NativeBaseProvider,
    extendTheme,
    VStack,
    Pressable,
    Box,
} from "native-base";

import { TextInput, Button, TouchableOpacity } from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

export default function Cube({navigation}) {
    return (
        <VStack bg="#06A77D" flex={1} pt={10} space={10}>
            <HStack justifyContent="space-between" flex={1} px={5}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Text color={"white"} textAlign={"right"} fontSize={20} style={{ fontFamily: 'Courgette'}}>Voltar</Text>
                </TouchableOpacity>
                <Text color={"white"} textAlign={"right"} fontSize={20} style={{ fontFamily: 'Courgette'}}>3/3</Text>
            </HStack>
            <VStack flex={1} px={5}>
                <HStack flex={1} alignItems={"center"} space={2}>
                    <FontAwesome name="arrows-h" size={18} color="white" />
                    <Text color="white" fontSize={30} fontFamily={"Courgette"}>Largura: </Text>
                    <TextInput placeholder="0.00 (cm)" placeholderTextColor="white" keyboardType="numeric"
                               style={{fontFamily: 'Courgette', color: "white", borderBottomWidth: 1, width: 130, borderBottomColor: 'white',
                               fontSize: 16}}/>

                </HStack>
                <HStack flex={1} alignItems={"center"} space={2}>
                    <FontAwesome name="arrows-v" size={18} color="white" />
                    <Text color="white" fontSize={30} fontFamily={"Courgette"}>Altura: </Text>
                    <TextInput style={{fontFamily: 'Courgette', color: "white", borderBottomWidth: 1, width: 130, borderBottomColor: 'white',
                        fontSize: 16}} placeholder="0.00 (cm)" placeholderTextColor="white"  keyboardType="numeric"/>
                </HStack>
                <HStack flex={1} alignItems={"center"} space={2}>
                    <AntDesign name="arrowsalt" size={18} color="white" />
                    <Text color="white" fontSize={30} fontFamily={"Courgette"}>Profundidade:</Text>
                    <TextInput style={{fontFamily: 'Courgette', color: "white", borderBottomWidth: 1, width: 100, borderBottomColor: 'white',
                        fontSize: 16}} placeholder="0.00 (cm)" placeholderTextColor="white"  keyboardType="numeric"/>

                </HStack>
            </VStack>
            <VStack flex={1} justifyContent={"flex-end"} pb={5}>
                <TouchableOpacity onPress={() => navigation.navigate('Results')}>
                    <Text textAlign={"center"} fontSize={24} p={2} bg={"white"} w={40} margin={"auto"} borderRadius={10}
                          color={"#06A77D"}>Finalizar</Text>
                </TouchableOpacity>
            </VStack>
        </VStack>
    )
}