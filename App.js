/// <reference types="nativewind/types" />
import { NavigationContainer } from "@react-navigation/native";

import AppRoutes from './src/routes/app.route'
export default function App() {
  return (
    <NavigationContainer>
      <AppRoutes />
    </NavigationContainer>
  );
}