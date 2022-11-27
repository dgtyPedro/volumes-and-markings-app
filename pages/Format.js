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
    Stack,
    VStack,
    Pressable,
    Box,
} from "native-base";
import { StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { PixelRatio } from "react-native";
import styled from 'styled-components';
import { Dimensions } from 'react-native';

const { deviceWidth } = Dimensions.get('screen');
const { deviceHeight } = Dimensions.get('screen');

const Boca = styled.View`
    width: 85px;
    height: 60px;
    margin-top: -30px;
    background-color: #F18061;
    border: 3px solid #7B2B09;
    border-top-start-radius: 40px;
    border-top-end-radius: 25px;
    border-bottom-end-radius: 30px;
    border-bottom-start-radius: 60px;
`;

export default function Format() {

    // const styles = StyleSheet.create({
    //     marca: {
    //         height: '2px',
    //     },
    // });


    return (

        <VStack justifyContent="center" bg="#30BCED" flex={1} space={10}>
            <VStack px={5} space={2}>
                <Text color={"white"} textAlign={"right"}>2/4</Text>
                <Text color={"white"} textAlign={"center"}>Formato</Text>
                <Text color={"white"} textAlign={"center"}>Escolher o formato do recipiente.</Text>
            </VStack>
            <HStack space={3} justifyContent="center">
                <Pressable onPress={() => navigation.navigate('Ruler')}>
                    <Center h="40" w="40" bg="#FC5130" bg="#06A77D" rounded="md" shadow={3}>
                        <FontAwesome5 name="ruler" size={40} color="white" />
                        <Text color="white" fontSize={22}>Cubo</Text>
                    </Center>
                </Pressable>
                <Pressable onPress={() => navigation.navigate('Angle')}>
                    <Center h="40" w="40" bg="#38369A" rounded="md" shadow={3}>
                        <MaterialCommunityIcons name="ruler-square-compass" size={40} color="white" />
                        <Text color="white" textAlign="center" fontSize={22}>Cilindro</Text>
                    </Center>
                </Pressable>
            </HStack>
        </VStack>
    )
}