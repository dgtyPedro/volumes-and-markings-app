import React, {useState, useEffect} from "react";
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

import {FontAwesome, Ionicons} from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import {TextInput, TouchableOpacity} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Cylinder({navigation}) {

    const [diametro, setDiametro] = useState(0);
    const [altura, setAltura] = useState(0);

    const goToResults = async () => {
        if(diametro && diametro > 0 && altura && altura > 0){
            const base_pxr = await AsyncStorage.getItem('@base_pxr')
            const volumeTotal = 3.14159265359 * ((diametro * 0.01)/2) * ((diametro * 0.01)/2) * (altura * 0.01)
            console.log(volumeTotal)
            const litragem = volumeTotal * 1000
            console.log(litragem)
            const espacamentoirl = (altura * 0.05) / litragem
            console.log(espacamentoirl)
            const espacamentorn = Math.round((espacamentoirl*100)/base_pxr)
            await AsyncStorage.setItem('@espacamento_rn', JSON.stringify(espacamentorn))
            navigation.navigate('Results')
        }else{
            alert('Complete todos os valores')
        }
    }

    return (
        <VStack bg="#38369A" flex={1} pt={10} space={10}>
            <HStack justifyContent="space-between" flex={1} px={5}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Text color={"white"} textAlign={"right"} fontSize={20} style={{ fontFamily: 'Courgette'}}>Voltar</Text>
                </TouchableOpacity>
                <Text color={"white"} textAlign={"right"} fontSize={20} style={{ fontFamily: 'Courgette'}}>3/3</Text>
            </HStack>
            <VStack flex={1} px={5}>
                <HStack flex={1} alignItems={"center"} space={2}>
                    <FontAwesome name="arrows-h" size={18} color="white" />
                    <Text color="white" fontSize={30} fontFamily={"Courgette"}>Diametro{"\n"} da Base: </Text>
                    <TextInput value={diametro}
                               onChangeText={number => setDiametro(number)}
                               placeholder="0.00 (cm)" placeholderTextColor="white" keyboardType="numeric"
                               style={{fontFamily: 'Courgette', color: "white", borderBottomWidth: 1, width: 130, borderBottomColor: 'white',
                                   fontSize: 16}}/>
                </HStack>
                <HStack flex={1} alignItems={"center"} space={2}>
                    <FontAwesome name="arrows-v" size={18} color="white" />
                    <Text color="white" fontSize={30} fontFamily={"Courgette"}>Altura: </Text>
                    <TextInput
                        onChangeText={number => setAltura(number)}
                        value={altura} style={{fontFamily: 'Courgette', color: "white", borderBottomWidth: 1, width: 130, borderBottomColor: 'white',
                        fontSize: 16}} placeholder="0.00 (cm)" placeholderTextColor="white"  keyboardType="numeric"/>
                </HStack>
            </VStack>
            <VStack flex={1} justifyContent={"flex-end"} pb={5}>
                <TouchableOpacity onPress={() => goToResults()}>
                    <Text textAlign={"center"} fontSize={24} p={2} bg={"white"} w={40} margin={"auto"} borderRadius={10}
                          color={"#38369A"}>Finalizar</Text>
                </TouchableOpacity>
            </VStack>
        </VStack>
    )
}