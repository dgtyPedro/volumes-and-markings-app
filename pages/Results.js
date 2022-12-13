import React, {useEffect, useState} from "react";
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

import {TextInput, Button, TouchableOpacity, View, Dimensions, Alert} from "react-native";

import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import {useFonts} from "expo-font";
import AsyncStorage from "@react-native-async-storage/async-storage";

const screen = Dimensions.get("screen");

export default function Results({navigation}) {
    const [spacing, setSpacing] = useState(100);
    const [volumeTotal, setVolumeTotal] = useState(100);

    useEffect(() => {
        const getSpacing = async() => {
            const spacing_rn = await AsyncStorage.getItem('@espacamento_rn')
            const volume = await AsyncStorage.getItem('@volume_total')
            Alert.alert("Result", `Total Volume: ${(parseFloat(volume)).toFixed(2)}ml`)
            setSpacing(parseInt(spacing_rn))
        }
        getSpacing()
    }, [])
    const [loaded] = useFonts({
        Courgette: require('../assets/fonts/Courgette-Regular.ttf'),
    });
    if (!loaded) {
        return null;
    }

    return (
        <VStack bg="#46ACC2" flex={1} flexDirection={"column-reverse"}>
            <HStack>
                <VStack flexDirection={"column-reverse"}>
                    {
                        Array.from({length: 210}, (_, i) => i * 50).map((i) => {
                            if(i === 0){
                                return <VStack key={i}>
                                    <TouchableOpacity onPress={()=> navigation.navigate('Home')}>
                                        <Text position={"absolute"} top={(spacing - 90)} left={(screen.width - 80)}
                                              style={{backgroundColor: 'white', padding: 10, borderRadius: 10, color: '#46ACC2'}}
                                              fontFamily='Courgette' fontSize={20}>Home</Text>
                                    </TouchableOpacity>

                                    <Text key={i} color={"white"} position={"absolute"} top={spacing} fontFamily='Courgette'
                                          fontSize={30} style={{paddingLeft: 5}}>
                                        {i}ml
                                    </Text>
                                    <View style={{width: 100, height: 3, backgroundColor: 'white', marginTop: spacing}}></View>
                                </VStack>
                            }
                            return <VStack key={i}>
                                <Text key={i} color={"white"} position={"absolute"} top={spacing} fontFamily='Courgette'
                                      style={{paddingLeft: 5}} fontSize={20}>
                                    {i}ml
                                </Text>
                                <View style={{width: 100, height: 3, backgroundColor: 'white', marginTop: spacing}}></View>
                            </VStack>
                        })
                    }
                </VStack>
            </HStack>
        </VStack>
    )
}