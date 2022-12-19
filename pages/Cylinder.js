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
import {TextInput, TouchableOpacity, Alert, PixelRatio} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Cylinder({navigation}) {

    const [diametro, setDiametro] = useState(0);
    const [altura, setAltura] = useState(0);

    const goToResults = async () => {
        if(diametro && diametro > 0 && altura && altura > 0){
            const pixelRatio = PixelRatio.get();
            const defaultPxr = PixelRatio.getPixelSizeForLayoutSize(100);
            let resDpi;
            switch (pixelRatio) {
                case 0.75:
                    resDpi = 120;
                    break;
                case 1:
                    resDpi = 160;
                    break;
                case 1.5:
                    resDpi = 240;
                    break;
                case 2:
                    resDpi = 320;
                    break;
                case 3:
                    resDpi = 480;
                    break;
                case 3.5:
                    resDpi = 640;
                    break;
                case 4:
                    resDpi = 640;
                    break;
                default:
                    resDpi = 300;
                    break;
            }
            const base_pxr = (defaultPxr/resDpi)*2.54
            const volumeTotal = 3.14159265359 * ((diametro * 0.01)/2) * ((diametro * 0.01)/2) * (altura * 0.01)
            const litragem = volumeTotal * 1000
            const espacamentoirl = (altura * 0.05) / litragem
            if(espacamentoirl < 0.2){
                return Alert.alert('Error', 'The spacing between the marks is too small, the application was unable to render it. Measure a smaller container.')
            }
            if(espacamentoirl < 0.4){
                Alert.alert('Warning', 'The spacing between the marks is small, rendering problems may occur.')
            }
            const espacamentorn = Math.round((espacamentoirl*100)/base_pxr)
            await AsyncStorage.setItem('@volume_total', JSON.stringify(litragem))
            await AsyncStorage.setItem('@espacamento_rn', JSON.stringify(espacamentorn))
            navigation.navigate('Results')
        }else{
            Alert.alert('Alert', 'Fill all values')
        }
    }

    return (
        <VStack bg="#38369A" flex={1} space={10}>
            <HStack justifyContent="space-between" flex={1} px={5} py={2}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Text color={"white"} textAlign={"right"} fontSize={20} style={{ fontFamily: 'Courgette'}}>Go Back</Text>
                </TouchableOpacity>
                <Text color={"white"} textAlign={"right"} fontSize={20} style={{ fontFamily: 'Courgette'}}>3/3</Text>
            </HStack>
            <VStack flex={1} px={5}>
                <HStack flex={1} alignItems={"center"} space={2}>
                    <FontAwesome name="arrows-h" size={18} color="white" />
                    <Text color="white" fontSize={30} fontFamily={"Courgette"}>Diameter: </Text>
                    <TextInput value={diametro}
                               onChangeText={number => setDiametro(number)}
                               placeholder="0.00 (cm)" placeholderTextColor="white" keyboardType="numeric"
                               style={{fontFamily: 'Courgette', color: "white", borderBottomWidth: 1, width: 130, borderBottomColor: 'white',
                                   fontSize: 16}}/>
                </HStack>
                <HStack flex={1} alignItems={"center"} space={2}>
                    <FontAwesome name="arrows-v" size={18} color="white" />
                    <Text color="white" fontSize={30} fontFamily={"Courgette"}>Height: </Text>
                    <TextInput
                        onChangeText={number => setAltura(number)}
                        value={altura} style={{fontFamily: 'Courgette', color: "white", borderBottomWidth: 1, width: 130, borderBottomColor: 'white',
                        fontSize: 16}} placeholder="0.00 (cm)" placeholderTextColor="white"  keyboardType="numeric"/>
                </HStack>
            </VStack>
            <VStack flex={1} justifyContent={"flex-end"} pb={5}>
                <TouchableOpacity onPress={() => goToResults()}>
                    <Text textAlign={"center"} fontSize={24} p={2} bg={"white"} w={40} margin={"auto"} borderRadius={10}
                          color={"#38369A"} fontFamily={'Courgette'}>Finish</Text>
                </TouchableOpacity>
            </VStack>
        </VStack>
    )
}