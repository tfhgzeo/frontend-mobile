import React, { useState } from "react";
import { Text, TouchableOpacity, View,Image } from "react-native";
import SvgUri from 'react-native-svg-uri';

import { useNavigation } from '@react-navigation/native';
import { PropsStack } from "../../types";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

//COMPONENTS

import Input from "../../components/Input";


const SenhaRedefinida: React.FC = () => {
  const [senha, setSenha] = useState<string>()
  const [repitaSenha, setRepitaSenha] = useState<string>()
  const navigation = useNavigation<NativeStackNavigationProp<PropsStack>>();
  const size = 25


  const voltar = () => {
    navigation.navigate('AlterarSenha');
  };

  return (
    <View className="flex flex-1 justify-center items-center  p-6" >
      <View className="absolute left-5 top-20"> 
      <TouchableOpacity 
      className="bg-white p-2 rounded-full shadow-md shadow-black"
      onPress={voltar}
      >                 
        <SvgUri
        width={size}
        height={size}
        source={require('../../../assets/BtnVoltar.svg')}
      />
      </TouchableOpacity>
      </View>
      <Image
          source={require('../../../assets/Cadeado.png')}
          style={{ width: size*6, height: size*6 }}
        />
      <View className="items-start w-full mt-12">
        <Text className="text-primary font-bold text-4xl mt-4 w-full text-center">Senha Redefinida com sucesso!</Text>
      </View>
      <TouchableOpacity 
      className="justify-center w-80 h-14 bg-primary rounded-full mt-6 items-center "
      onPress={()=>{ navigation.navigate('Login')}}>
        <Text className="text-white font-bold">Fazer Login</Text>
      </TouchableOpacity>
    </View>
  )
}

export default SenhaRedefinida