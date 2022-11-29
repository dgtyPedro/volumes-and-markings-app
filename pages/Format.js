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
import { PixelRatio, Button } from "react-native";
import styled from 'styled-components';
import { Dimensions, TouchableOpacity } from 'react-native';
import {useFonts} from "expo-font";

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

export default function Format({navigation}) {

    const [loaded] = useFonts({
        Courgette: require('../assets/fonts/Courgette-Regular.ttf'),
    });
    if (!loaded) {
        return null;
    }

    return (
        <Stack display={"flex"} flex={1} bg={"white"}>
            <VStack px={5} space={2} bg="#46ACC2" pt={10} pb={5} borderBottomLeftRadius={20} borderBottomRightRadius={20}>
                <HStack justifyContent="space-between">
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Text color={"white"} textAlign={"right"} fontSize={20} style={{ fontFamily: 'Courgette'}}>Voltar</Text>
                    </TouchableOpacity>
                    <Text color={"white"} textAlign={"right"} fontSize={20} style={{ fontFamily: 'Courgette'}}>2/3</Text>
                </HStack>
                <Text color={"white"} textAlign={"center"} fontSize={28} style={{ fontFamily: 'Courgette'}}>Formato</Text>
                <Text color={"white"} textAlign={"center"} fontSize={18} style={{ fontFamily: 'Courgette'}}>Escolher o formato do recipiente.</Text>
            </VStack>
            <VStack space={3} justifyContent="center" alignItems="center" bg="white" flex={1}>
                <TouchableOpacity onPress={() => navigation.navigate('Cube')}>
                    <Center style={{width: 200, height: 200}} bg="#06A77D" rounded="md" shadow={3}>
                        <MaterialCommunityIcons name="cube" size={80} color="white" />
                        <Text color="white" fontSize={40}>Cubóide</Text>
                    </Center>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Cylinder')}>
                    <Center style={{width: 200, height: 200}} bg="#38369A" rounded="md" shadow={3}>
                        <MaterialCommunityIcons name="cylinder" size={80} color="white" />
                        <Text color="white" textAlign="center" fontSize={40}>Cilindro</Text>
                    </Center>
                </TouchableOpacity>
            </VStack>
    </Stack>
    )
}