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

import {Ionicons} from '@expo/vector-icons';
import {AntDesign} from '@expo/vector-icons';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import {FontAwesome5} from '@expo/vector-icons';
import {Entypo} from '@expo/vector-icons';
import {MaterialIcons} from '@expo/vector-icons';

import {TextInput, Button, TouchableOpacity} from "react-native";


import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useFonts} from "expo-font";

// color="#303036"

export default function Home({navigation}) {
    const [loaded] = useFonts({
        Courgette: require('../assets/fonts/Courgette-Regular.ttf'),
    });
    if (!loaded) {
        return null;
    }
    return (
        <Stack bg={"white"} flex={1} justifyContent={"space-between"}>
            <VStack alignItems="center" px={5} py={2}>
                <Text style={{fontFamily: 'Courgette', textAlign: 'center'}} fontSize={30}>Measure Volume and Show Markings</Text>
                <Text style={{fontFamily: 'Courgette', textAlign: 'center'}} fontSize={12}>Made By Pedro Gabriel</Text>
            </VStack>
            <VStack mb={10} justifyContent={"center"} alignItems={"center"} borderRadius={10}>
                {/*<Text textAlign="center" color="#303036" fontSize={30}>Medir Volume</Text>*/}
                <TouchableOpacity onPress={() => navigation.navigate('Adjust')} margin={"auto"}
                                  style={{backgroundColor: "#46ACC2", width: 200, height: 200, display: "flex",
                                      justifyContent: "center", alignItems: "center", margin: "auto", textAlign: "center", borderRadius: 20}}>
                    <MaterialCommunityIcons name="cube-outline" color="white" size={70}/>
                    <Text style={{fontFamily: 'Courgette'}} color="white" fontSize={30}>Start</Text>
                </TouchableOpacity>
            </VStack>
            <HStack justifyContent="space-between" bg="#46ACC2" borderTopLeftRadius={20} borderTopRightRadius={20} p={1}>
                {/*<TouchableOpacity>*/}
                {/*    <Center h="20" w="20" rounded="md">*/}
                {/*        <MaterialCommunityIcons name="advertisements" size={24} color="white"/>*/}
                {/*        <Text style={{fontFamily: 'Courgette'}} color="white" fontSize={16}>Ver Ad</Text>*/}
                {/*    </Center>*/}
                {/*</TouchableOpacity>*/}
                <TouchableOpacity onPress={() => alert('Coming soon')}>
                    <Center h="20" w="20" rounded="md">
                        <Entypo name="language" size={24} color="white"/>
                        <Text style={{fontFamily: 'Courgette', textAlign: 'center'}} color="white" fontSize={16}>Languages</Text>
                    </Center>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => alert('Coming soon')}>
                    <Center h="20" w="20" rounded="md">
                        <MaterialCommunityIcons name="tape-measure" size={24} color="white" />
                        <Text style={{fontFamily: 'Courgette', textAlign: 'center'}} color="white" fontSize={16}>Units</Text>
                    </Center>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('About')}>
                    <Center h="20" w="20" rounded="md">
                        <AntDesign name="questioncircleo" color="white" size={24}/>
                        <Text style={{fontFamily: 'Courgette'}} color="white" fontSize={16}>About</Text>
                    </Center>
                </TouchableOpacity>
                {/*<TouchableOpacity>*/}
                {/*    <Center h="20" w="20" rounded="md">*/}
                {/*        <FontAwesome5 name="store-alt" size={24} color="white"/>*/}
                {/*        <Text style={{fontFamily: 'Courgette'}} color="white" fontSize={16}>Loja</Text>*/}
                {/*    </Center>*/}
                {/*</TouchableOpacity>*/}
            </HStack>
        </Stack>
    )
}