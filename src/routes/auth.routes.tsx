import * as React from "react";
import Login from "../screens/Login";
//import Splash from "../pages/Splash";
//import EsqueceuSenha from "../pages/EsqueceuSenha";
//import Verificacao from "../pages/PrimeiroAcesso/Verificacao";
//import Cadastro from "../pages/PrimeiroAcesso/Cadastro";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

const AuthStack = createNativeStackNavigator();

const AuthRoutes: React.FC = () => (
    <AuthStack.Navigator
        initialRouteName="Splash"
        screenOptions={{
            headerShown: false,
        }}
    >
        <AuthStack.Screen name="Login" component={Login} />

    </AuthStack.Navigator>
);

export default AuthRoutes;