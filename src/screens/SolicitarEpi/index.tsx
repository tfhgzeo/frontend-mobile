import React, { useState } from "react";
import { Text, View, TextInput,TouchableOpacity} from "react-native";
import { useNavigation } from '@react-navigation/native';
import { PropsStack } from "../../types";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

//COMPONENTS
import DropDawnImages from "../../components/DropDawnImages";
import DropDownTamanhos from "../../components/DropDownTamanhos";
import SvgUri from 'react-native-svg-uri';

const SolicitarEpi: React.FC = () => {
  const [epiSelecionado, setEpiSelecionado] = useState(null);
  const navigation = useNavigation<NativeStackNavigationProp<PropsStack>>();

  const handleCountrySelect = (country: any) => {
    setEpiSelecionado(country);
  };

  const cancelar = () => {
    navigation.navigate('EPI');
  };


  return (
    <View className='flex-1 mt-4 items-center'>
      <View className="w-11/12 items-start ">
        <Text >Informe os detalhes do EPI</Text>
      </View>
      <DropDawnImages screen="SolicitaEpi" onSelect={handleCountrySelect}/>
      <DropDownTamanhos/>
      <View className="m-3 w-11/12 p-3 border border-primary rounded-md bg-white ">
      <TextInput 
        style={{textAlignVertical:'top'}}
        className="h-24"
        multiline
        numberOfLines={4} 
        placeholder='Relate seu problema'
        placeholderTextColor="#00266F"
      />
      </View>
      <View className="mb-3 bg-white p-4 w-11/12 border border-primary rounded-lg ">
      <TouchableOpacity className="flex-row items-center justify-center">
        <SvgUri     
                    width={25}
                    height={25}
                    source={require('../../../assets/camera.svg')}
                  />
                  <Text className="text-center text-primary font-bold ml-2">
                Adicionar Imagem
        </Text>
      </TouchableOpacity>
      </View>
      <View className="mb-3 bg-primary p-4 w-11/12 rounded-lg">
      <TouchableOpacity onPress={cancelar}>
        <Text className="text-center text-white font-bold">
          Enviar
        </Text>
      </TouchableOpacity>
      </View>
      <View className="mb-13 bg-error p-4 w-11/12 rounded-lg ">
      <TouchableOpacity onPress={cancelar}>
        <Text className="text-center text-white font-bold">
          Cancelar
        </Text>
      </TouchableOpacity>
      </View>
    </View>
  )
}

export default SolicitarEpi