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
    Stack
} from "native-base";

import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// color="#303036"

export default function Home({ navigation }) {
    return (
        <Stack bg={"white"} flex={1} justifyContent={"space-between"} pt={10}>
            <HStack justifyContent="space-between">
                <Pressable>
                    <Center h="20" w="20" rounded="md" >
                        <Entypo name="language" size={24} color="#303036" />
                        <Text color="#303036" fontSize={16}>Línguas</Text>
                    </Center>
                </Pressable>
                <Pressable>
                    <Center h="20" w="20" rounded="md" >
                        <AntDesign name="questioncircleo" color="#303036" size={24} />
                        <Text color="#303036" fontSize={16}>Sobre</Text>
                    </Center>
                </Pressable>
            </HStack>
            <VStack mb={10}>
                {/*<Text textAlign="center" color="#303036" fontSize={30}>Medir Volume</Text>*/}
                <Pressable onPress={() => navigation.navigate('Adjust')} margin={"auto"}>
                    <Center h="40" w="40" bg="#46ACC2"  rounded="md" >
                        <MaterialCommunityIcons name="cube-outline" color="white" size={40} />
                        <Text color="white" fontSize={22}>Iniciar</Text>
                    </Center>
                </Pressable>
            </VStack>
            <HStack justifyContent="space-between" bg="#46ACC2">
                <Pressable>
                    <Center h="20" w="20" rounded="md" >
                        <Entypo name="language" size={24} color="white" />
                        <Text color="white" fontSize={16}>Línguas</Text>
                    </Center>
                </Pressable>
                <Pressable>
                    <Center h="20" w="20" rounded="md" >
                        <AntDesign name="questioncircleo" color="white" size={24} />
                        <Text color="white" fontSize={16}>Sobre</Text>
                    </Center>
                </Pressable>
            </HStack>
        </Stack>
    )
}