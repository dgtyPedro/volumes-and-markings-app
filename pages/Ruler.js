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

export default function Ruler() {

    // const styles = StyleSheet.create({
    //     marca: {
    //         height: '2px',
    //     },
    // });


    return (
        <Stack bg="#30BCED" pt={10} flex={1} direction={"column"}>
            <Box h={`53px`} w={'100%'} bg='white'></Box>
            <Stack><Text>{PixelRatio.get()}</Text></Stack>
            <Box h={`91px`} w={'100%'} bg='white'></Box>

            <Stack><Text>{Dimensions.get('window').height}</Text></Stack>
            <Stack><Text>{PixelRatio.get()}</Text></Stack>
            <Stack></Stack>
            <Stack></Stack>
        </Stack>
    )
}