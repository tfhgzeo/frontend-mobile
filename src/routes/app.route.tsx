import React from "react";
import SvgUri from 'react-native-svg-uri';


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
        options={{ headerTitle: "Solicitar EPI",headerShown: true }}
      />
      <AppStack.Screen
        name="SolicitarEquipamento"
        component={SolicitarEquipamento}
        options={{ headerTitle: "Solicitar Equipamento",headerShown: true }}
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
                  <SvgUri
                    width={size}
                    height={size}
                    source={require('../../assets/EpiFocus.svg')}
                  />
                </View>
              )
            } else {
              return (<View >
                <SvgUri
                  width={size}
                  height={size}
                  source={require('../../assets/Epi.svg')}
                />
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
                <View style={{ marginTop: -20 }} >
                  <SvgUri
                    width={size * 2}
                    height={size * 2}
                    source={require('../../assets/HomeFocus.svg')}
                  />
                </View>
              )
            } else {
              return (
                <View style={{ marginTop: -20 }}>
                  <SvgUri
                    width={size * 2}
                    height={size * 2}
                    source={require('../../assets/Home.svg')}
                  />
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
                  <SvgUri
                    width={size}
                    height={size}
                    source={require('../../assets/EquipamentoFocus.svg')}
                  />
                </View>
              )
            } else {
              return (
                <View >
                  <SvgUri
                    width={size}
                    height={size}
                    source={require('../../assets/Equipamento.svg')}
                  />
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