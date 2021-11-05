import React from "react";
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { MenuLateral } from "./src/navigator/MenuLateral"; 
import { styles } from "./src/theme/AppTheme";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "react-native";

export const App = () => {
  return (
    <NavigationContainer>
      <StatusBar
      backgroundColor="#37cc70"
      barStyle="light-content"/>

      <MenuLateral></MenuLateral>
    </NavigationContainer>
  )
}

export default App;