import React, {useState, useEffect} from "react";
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

import {TextInput, Button, TouchableOpacity, Linking} from "react-native";

import {Ionicons} from '@expo/vector-icons';
import {AntDesign} from '@expo/vector-icons';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import {FontAwesome5} from '@expo/vector-icons';
import {Entypo} from '@expo/vector-icons';
import {MaterialIcons} from '@expo/vector-icons';
import {useFonts} from "expo-font";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function About({navigation}) {

    return (
        <VStack bg="white" flex={1} space={15} pt={10} px={1} pb={5} flex={1}>
            <HStack justifyContent="space-between">
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Text color={"#46ACC2"} textAlign={"right"} fontSize={20}
                          style={{fontFamily: 'Courgette'}}>Go Back</Text>
                </TouchableOpacity>
            </HStack>
            <VStack px={5} space={2} flex={1}>
                <Text color={"#46ACC2"} textAlign={"center"} fontSize={24}
                      style={{fontFamily: 'Courgette'}}>About</Text>
                <VStack justifyContent={"space-between"} flex={1}>
                    <Text color={"#46ACC2"} textAlign={"justify"} fontSize={18} style={{fontFamily: 'Courgette'}}>
                        At Measure Volumes and Show Markings you have a volumetric measuring and marking device in your
                        pocket. When adding the measurements of the container in the application, its entire volumetric
                        proportion is calculated, being able to make precise measurements without the need for a
                        measuring
                        jar.</Text>
                    <VStack>
                        <Text color={"#46ACC2"} textAlign={"justify"} fontSize={18} style={{fontFamily: 'Courgette'}}>
                            This application was created as a method of studying mobile programming and does not intend
                            any
                            kind of direct monetization. It's an Open Source app where any suggestions are welcome,
                            there
                            are plans to keep it updated.
                        </Text>
                        <Text color={"#46ACC2"} textAlign={"justify"} fontSize={18} style={{
                            fontFamily: 'Courgette',
                            textDecorationLine: 'underline'
                        }}
                              onPress={() => {
                                  Linking.openURL('https://github.com/dgtyPedro/measure-volumes-and-show-markings-app-react_native');
                              }}>
                            Here you can find the Source Code for it.
                        </Text>
                    </VStack>
                    <Text color={"#46ACC2"} textAlign={"center"} fontSize={18} style={{fontFamily: 'Courgette'}}>Application
                        created by Pedro Gabriel Caires Silva.</Text>
                </VStack>
            </VStack>
        </VStack>
    )
}