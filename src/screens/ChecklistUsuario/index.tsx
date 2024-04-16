import React from "react";
import { Text, View, ScrollView } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { PropsStack } from "../../types";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import * as Progress from 'react-native-progress';
import UserAvatar from 'react-native-user-avatar';
import DropDownChekcList from "../../components/DropDownChekcList";

//COMPONENTS
import EpiCard from "../../components/EpiCard"

const ChecklistUsuario: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<PropsStack>>();

  const solicitarEpi = () => {
    navigation.navigate('SolicitarEpi');
  };

  return (

    <View className='flex-1  '>
      <View className='p-6  bg-white '>

        <View className='flex-row mb-4 mt-14'>
          <UserAvatar size={50} name="Gabriel Silva" />
          <View className='ml-5'>
            <Text className="text-2xl font-bold">Gabriel Silva</Text>
            <Text className="text-lg text-subtitulo">Matrícula: 265325</Text>
          </View>
        </View>
        <View className="ml-5">
          {<Text className="text-xl mb-3">4/<Text className="text-primary">30</Text> Inspenções</Text>}
          <Progress.Bar progress={0.13} width={300} height={20} color="#00266F" />
        </View>
      </View>
      <View className="items-center  w-full ">
        <View className="w-full items-center h-10 p-2 ">
          <Text className="text-xl text-center ">
            Confirme o estado de seus EPI's
          </Text>
        </View>
        <ScrollView>
          <View className="">
            <DropDownChekcList epi='camisa' />
          </View>
          <View className="">
            <DropDownChekcList epi='calca' />
          </View>
          <View className="">
            <DropDownChekcList epi='bota' />
          </View>
          <View className="">
            <DropDownChekcList epi='luva' />
          </View>
          <View className="">
            <DropDownChekcList epi='smartphone' />
          </View>
          <View className="">
            <DropDownChekcList epi='impressora' />
          </View>
          <View className="">
            <DropDownChekcList epi='espelho' />
          </View>




        </ScrollView>
      </View>
    </View>

  )
}

export default ChecklistUsuario