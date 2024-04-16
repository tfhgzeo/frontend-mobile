import React from "react";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';


// SCREENS
import Holerites from "../screens/Home";
import Epi from "../screens/Epi";
import Equipamento from "../screens/Equipamento";
import SolicitarEpi from "../screens/SolicitarEpi";
import SolicitarEquipamento from "../screens/SolicitarEquipamento";
import Login from "../screens/Login";
import EsqueceuSenha from "../screens/EsqueceuSenha";
import PrimeiroAcesso from "../screens/PrimeiroAcesso";
import Credencial from "../screens/Credencial";
import Verificacao from "../screens/Verificacao";
import EnviarCod from "../screens/EnviarCod";
import AlterarSenha from "../screens/AlterarSenha";
import SenhaRedefinida from "../screens/SenhaRedefinida";
// COMPONETS
import Foto from "../components/Foto";


import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Text } from "react-native";
import { PropsStack, PropsTab } from "../types";

const AppTabs = createBottomTabNavigator<PropsTab>();
const AppStack = createNativeStackNavigator<PropsStack>();

const AppRoutes: React.FC = () => {
  return (
    <AppStack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
      }}
    >
      <AppStack.Screen
        name="HoleriteTabs"
        component={AppTabsScreen}
      />
      <AppStack.Screen
        name="Credencial"
        component={Credencial}
      />
      <AppStack.Screen
        name="EsqueceuSenha"
        component={EsqueceuSenha}
      />
      <AppStack.Screen
        name="Verificacao"
        component={Verificacao}
      />
      <AppStack.Screen
        name="EnviarCod"
        component={EnviarCod}
      />
      <AppStack.Screen
        name="AlterarSenha"
        component={AlterarSenha}
      />
      <AppStack.Screen
        name="Foto"
        component={Foto}
      />
      <AppStack.Screen
        name="SenhaRedefinida"
        component={SenhaRedefinida}
      />

      <AppStack.Screen
        name="PrimeiroAcesso"
        component={PrimeiroAcesso}
      />

      <AppStack.Screen
        name="Login"
        component={Login}
      />
      <AppStack.Screen
        name="SolicitarEpi"
        component={SolicitarEpi}
        options={{ headerTitle: "Solicitar EPI", headerShown: true }}
      />
      <AppStack.Screen
        name="SolicitarEquipamento"
        component={SolicitarEquipamento}
        options={{ headerTitle: "Solicitar Equipamento", headerShown: true }}
      />
      {/* Adicione outras telas aqui */}
    </AppStack.Navigator>
  );
};

const AppTabsScreen: React.FC = () => {
  return (
    <AppTabs.Navigator
      initialRouteName="Holerite"
      screenOptions={{
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
        },
      }}
    >
      <AppTabs.Screen
        name="EPI"
        component={Epi}
        options={{
          headerTitle: () => (<Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 16 }}>EPI</Text>),
          headerTitleAlign: 'center',
          tabBarIcon: ({ color, size, focused }) => {
            if (focused) {
              return (
                <View >
                  <MaterialCommunityIcons name="face-mask" size={size} color="#1E1685" />
                </View>
              )
            } else {
              return (<View >
                <MaterialCommunityIcons name="face-mask" size={size} color="#888" />
              </View>
              )
            }
          }
        }}
      />
      <AppTabs.Screen
        name="Holerite"
        component={Holerites}
        options={{
          headerTitle: () => (<Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 16 }}>Holerite</Text>),
          headerTitleAlign: 'center',
          tabBarIcon: ({ color, size, focused }) => {
            if (focused) {
              return (
                <View >
                  <FontAwesome name="file-text" size={size} color="#1E1685" />
                </View>
              )
            } else {
              return (
                <View>
                  <FontAwesome name="file-text-o" size={size} color="#888" />
                </View>
              )
            }
          }
        }}
      />
      <AppTabs.Screen
        name="Equipamento"
        component={Equipamento}
        options={{
          headerTitle: () => (<Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 16 }}>Equipamento</Text>),
          headerTitleAlign: 'center',
          tabBarIcon: ({ color, size, focused }) => {
            if (focused) {
              return (
                <View  >
                  <MaterialCommunityIcons name="printer" size={size} color="#1E1685" />
                </View>
              )
            } else {
              return (
                <View >
                  <MaterialCommunityIcons name="printer" size={size} color="#888" />
                </View>
              )
            }
          }
        }}
      />
    </AppTabs.Navigator>
  )
}

export default AppRoutes