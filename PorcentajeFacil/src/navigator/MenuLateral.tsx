import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { SimpleScreen } from '../screens/SimpleScreen';
import { AumentoScreen } from "../screens/AumentoScreen";
import { IvaScreen } from "../screens/IvaScreen";
import { PropinaScreen } from "../screens/PropinaScreen";
import { DescuentoScreen } from "../screens/DescuentoScreen";
import { FraccionesScreen } from "../screens/FraccionesScreen";

const Drawer = createDrawerNavigator();

export const MenuLateral = () => {
    return (
        <Drawer.Navigator screenOptions={{
          headerStyle:{ elevation: 0}
        }}>
          <Drawer.Screen name="Porcentaje simple" component={ SimpleScreen } />
          <Drawer.Screen name="Descuento" component={ DescuentoScreen } />
          <Drawer.Screen name="Propina" component={ PropinaScreen } />
          <Drawer.Screen name="Iva" component={ IvaScreen } />
          <Drawer.Screen name="Aumento de precio" component={ AumentoScreen} />
          <Drawer.Screen name="Fracciones" component={ FraccionesScreen } />
        </Drawer.Navigator>
      );
}
