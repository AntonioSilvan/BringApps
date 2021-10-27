import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { SimpleScreen } from '../screens/SimpleScreen';

const Drawer = createDrawerNavigator();

export const MenuLateral = () => {
    return (
        <Drawer.Navigator>
          <Drawer.Screen name="Porcentaje simple" component={ SimpleScreen } />
          <Drawer.Screen name="Descuento" component={ SimpleScreen } />
          <Drawer.Screen name="Propina" component={ SimpleScreen } />
          <Drawer.Screen name="Iva" component={ SimpleScreen } />
          <Drawer.Screen name="Aumento de precio" component={ SimpleScreen} />
          <Drawer.Screen name="Fracciones" component={ SimpleScreen } />
        </Drawer.Navigator>
      );
}
