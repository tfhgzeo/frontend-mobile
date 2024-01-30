import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";

interface CardEpiInterface {
  data: {
    nome: string;
    dataSolicitacao: string;
    quantidade: number;
    validade: string;
    imagem: string;
    tamanho: string;
    idCard: string;
    status: string;
    nomeDisplay: string;
  };
}

const EquipamentoCard: React.FC = ({ }) => {

  return (
    <View className="flex flex-col bg-white p-2 rounded-md border-primary border w-11/12">
      <TouchableOpacity >
        <View className=" flex flex-row" >
          <Image
            source={require('../../../assets/Epi.png')}
          />
          <View className="ml-4 flex flex-col">
            <Text  >
              Equipamento: <Text className="text-subtitulo">SmartPhone</Text>
            </Text>
            <Text className="mt-3">Status:
              <Text className="text-subtitulo"> Pendente</Text>
            </Text>
            <Text className="mt-3">Data:
              <Text className="text-subtitulo"> 27/01/24</Text>
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default EquipamentoCard;