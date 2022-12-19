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

import {TextInput, Button, TouchableOpacity, Alert, PixelRatio, Dimensions} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Adjust({navigation}) {
    const { width, height } = Dimensions.get('window');
    const [inputValue, setInputValue] = useState(0);

    useEffect(() => {
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
            case 4:
                resDpi = 640;
                break;
            default:
                resDpi = 300;
                break;
        }
        const espacamento_rn = (defaultPxr/resDpi)*2.54
    }, []);

    const storeData = async () => {
        try {
            if(inputValue && inputValue > 0){
                if(inputValue > 10){
                    return Alert.alert('Error', 'The value entered is much larger than expected. Enter a smaller value.')
                }
                if(inputValue > 5){
                    Alert.alert('Warning', 'The value provided is a little larger than expected, in conventional screens the square varies from 1 to 4cm in width. Be aware that adjusting the application incorrectly can lead to results that are far from reality.')
                }
                await AsyncStorage.setItem('@base_pxr', inputValue)
                navigation.navigate('Format')
            }
            else{
                Alert.alert('Alert', 'Fill the width field')
            }
        } catch (e) {
            // saving error
        }
    }

    return (
        <Stack bg="#46ACC2" flex={1} space={15}>
            <VStack px={5} py={2} space={2}>
                <HStack justifyContent="space-between">
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Text color={"white"} textAlign={"right"} fontSize={20}
                              style={{fontFamily: 'Courgette'}}>Go Back</Text>
                    </TouchableOpacity>
                    <Text color={"white"} textAlign={"right"} fontSize={20} style={{fontFamily: 'Courgette'}}>1/3</Text>
                </HStack>
                <Text color={"white"} textAlign={"center"} fontSize={24} style={{fontFamily: 'Courgette'}}>Adjust
                    APP</Text>
                <Text color={"white"} textAlign={"center"} fontSize={18} style={{fontFamily: 'Courgette'}}>At this stage
                    we will regulate the proportion of measurements for your cellphone screen.</Text>
                <Text color={"white"} textAlign={"center"} fontSize={18} style={{fontFamily: 'Courgette'}}>With a
                    ruler, measure the width of the square below.</Text>
            </VStack>
            <VStack flex={1} justifyContent={"space-around"}>
                <VStack space={5}>
                    <HStack space={2} alignItems={"center"} justifyContent={"center"}>
                        <Box style={{width: 100, height: 100}} bg={"white"}></Box>
                    </HStack>
                    <HStack space={2} alignItems={"center"} justifyContent={"center"} color={"white"}>
                        <TextInput style={{
                            fontFamily: 'Courgette',
                            color: "white",
                            borderBottomWidth: 1,
                            width: 130,
                            borderBottomColor: 'white',
                            fontSize: 16
                        }} placeholder="Width (cm)" placeholderTextColor="white" keyboardType="numeric"
                                   value={inputValue}
                                   onChangeText={text => setInputValue(text)}/>
                    </HStack>
                </VStack>
                <TouchableOpacity onPress={() => storeData()}>
                    <Text textAlign={"center"} fontSize={24} p={2} bg={"white"} w={40} margin={"auto"} borderRadius={10}
                          color={"#46ACC2"} fontFamily={'Courgette'}>Next</Text>
                </TouchableOpacity>
            </VStack>
        </Stack>
    )
}