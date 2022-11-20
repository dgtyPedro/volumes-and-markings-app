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
    Pressable,
    Box,
} from "native-base";

import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function Home({ navigation }) {
    return (
        <VStack space={4} alignItems="center" justifyContent="center" bg="#303036" flex={1}>
            <Text textAlign="center" color="white" fontSize={30}>My Ruler</Text>
            <HStack space={3} justifyContent="center">
                <Pressable onPress={() => navigation.navigate('Ruler')}>
                    <Center h="40" w="40" bg="#30BCED" rounded="md" shadow={3}>
                        <FontAwesome5 name="ruler" size={40} color="white" />
                        <Text color="white" fontSize={22}>Régua Virtual</Text>
                    </Center>
                </Pressable>
                <Pressable onPress={() => navigation.navigate('Volume')}>
                    <Center h="40" w="40" bg="#FC5130"  rounded="md" shadow={3}>
                        <MaterialCommunityIcons name="cube-outline" color="white" size={40} />
                        <Text color="white" fontSize={22}>Medir Volume</Text>
                    </Center>
                </Pressable>
            </HStack>
            <HStack space={3} justifyContent="center">
                <Pressable onPress={() => navigation.navigate('Angle')}>
                    <Center h="40" w="40" bg="#38369A" rounded="md" shadow={3}>
                        <MaterialCommunityIcons name="ruler-square-compass" size={40} color="white" />
                        <Text color="white" textAlign="center" fontSize={22}>Transferidor/Medir Ângulos</Text>
                    </Center>
                </Pressable>
                <VStack space={3} justifyContent="center">
                    <Pressable>
                        <Center h="20" w="20" bg="#06A77D" rounded="md" shadow={3}>
                            <Entypo name="language" size={24} color="white" />
                            <Text color="white" fontSize={16}>Línguas</Text>
                        </Center>
                    </Pressable>
                    <Pressable>
                        <Center h="20" w="20" bg="#06A77D" rounded="md" shadow={3}>
                            <MaterialCommunityIcons name="advertisements" size={24} color="white" />
                            <Text color="white" fontSize={16}>Ver Ad</Text>
                        </Center>
                    </Pressable>
                </VStack>
                <VStack space={3} justifyContent="center">
                    <Pressable>
                        <Center h="20" w="20" bg="#06A77D" rounded="md" shadow={3}>
                            <MaterialIcons name="storefront" size={24} color="white" />
                            <Text color="white" fontSize={16}>Página</Text>
                        </Center>
                    </Pressable>
                    <Pressable>
                        <Center h="20" w="20" bg="#06A77D" rounded="md" shadow={3}>
                            <AntDesign name="questioncircleo" color="white" size={24} />
                            <Text color="white" fontSize={16}>Sobre</Text>
                        </Center>
                    </Pressable>
                </VStack>
            </HStack>

        </VStack>
    )
}