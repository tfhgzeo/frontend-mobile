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

const EpiCard: React.FC = ({ }) => {


  return (
    <View className="flex flex-col bg-white p-2 rounded-md border border-primary w-11/12 mt-3">
      <TouchableOpacity>
        <View className=" flex flex-row" >
          <Image
            source={require('../../../assets/Epi.png')}
          />
          <View className="ml-4 flex flex-col">
            <Text  >
              EPI: <Text className="text-subtitulo">Camisa ML</Text> Tamanho: <Text className="text-subtitulo">G</Text>
            </Text>
            <Text className="mt-3">Quantidade:
              <Text className="text-subtitulo"> 1</Text>
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

export default EpiCard;