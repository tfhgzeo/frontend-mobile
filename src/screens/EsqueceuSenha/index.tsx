import React, { useState } from "react";
import { Text, TouchableOpacity, View, } from "react-native";
import SvgUri from 'react-native-svg-uri';

import { useNavigation } from '@react-navigation/native';
import { PropsStack } from "../../types";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

//COMPONENTS

import Input from "../../components/Input";


const EsqueceuSenha: React.FC = () => {
  const [cpf, setCpf] = useState<string>()
  const [matricula, setMatricula] = useState<string>()
  const navigation = useNavigation<NativeStackNavigationProp<PropsStack>>();
  const size = 25


  const voltar = () => {
    navigation.navigate('Login');
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
      <Text>Esqueceu a Senha</Text>



    </View>
  )
}

export default EsqueceuSenha