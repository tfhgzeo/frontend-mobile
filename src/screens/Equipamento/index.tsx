import React from "react";
import { Text, View,TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { PropsStack } from "../../types";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";


//COMPONENTS
import EquipamentoCard from "../../components/EquipamentoCard";

const Equipamento: React.FC = () => {

  const navigation = useNavigation<NativeStackNavigationProp<PropsStack>>();
  const solicitarEquipamento = () => {
    navigation.navigate('SolicitarEquipamento');
  };


  return (
    <View className='flex flex-1 mt-4 items-center'>
      <EquipamentoCard/>
      <View className="absolute mb-10 z-10 bottom-0 bg-primary p-4 w-11/12 rounded-lg ">
      <TouchableOpacity onPress={solicitarEquipamento}>
        <Text className="text-center text-white font-bold">
          Solicitar Equipamento
        </Text>
      </TouchableOpacity>
      </View>
    </View>
  )
}

export default Equipamento