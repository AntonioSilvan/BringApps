import React from "react";
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { MenuLateral } from "./src/navigator/MenuLateral"; 
import { styles } from "./src/theme/AppTheme";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "react-native";
import { CBackground } from "./src/components/Background.component";

export const App = () => {
  return (
    <CBackground>
      <NavigationContainer>
      <StatusBar
      backgroundColor="#37cc70"
      barStyle="light-content"/>

      <MenuLateral></MenuLateral>
    </NavigationContainer>
    </CBackground>
    /*<NavigationContainer>
      <StatusBar
      backgroundColor="#37cc70"
      barStyle="light-content"/>

      <MenuLateral></MenuLateral>
    </NavigationContainer>*/
  )
}

export default App;