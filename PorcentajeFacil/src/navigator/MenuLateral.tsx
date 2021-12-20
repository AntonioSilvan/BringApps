import React from "react";
import { ImageBackground, Text, TouchableOpacity } from 'react-native';
import { createDrawerNavigator, DrawerScreenProps, DrawerToggleButton } from "@react-navigation/drawer";
import { SimpleScreen } from '../screens/SimpleScreen';
import { AumentoScreen } from "../screens/AumentoScreen";
import { IvaScreen } from "../screens/IvaScreen";
import { PropinaScreen } from "../screens/PropinaScreen";
import { DescuentoScreen } from "../screens/DescuentoScreen";
import { FraccionesScreen } from "../screens/FraccionesScreen";
import { styles } from "../theme/AppTheme";
import Icon from 'react-native-vector-icons/Ionicons';
import { DrawerActions, useNavigation } from "@react-navigation/native";


interface Props extends DrawerScreenProps<any, any>{}

const NavigationDrawerStructure = ({navigation}:Props) => {
  const toggleDrawer = () => {
      navigation.toggleDrawer();
  };

  return (
      <TouchableOpacity onPress={() => toggleDrawer()}>
          <Icon name="man-outline" size={30} color="#900" />
      </TouchableOpacity>
  );
};

const Drawer = createDrawerNavigator();

export const MenuLateral = () => {
    return (
        <Drawer.Navigator
        
        screenOptions={ (props) => ( {
          sceneContainerStyle:{...styles.sceneContainer},
          headerStyle:{ elevation: 0, backgroundColor: '#37cc70' },
          drawerActiveBackgroundColor:'#8bff94',
          drawerLabelStyle: {color: '#404e41'},
          headerTitleStyle:{color: 'white'},
          headerLeft: () => <TouchableOpacity style={{marginLeft: 10}} onPress={() => props.navigation.toggleDrawer()}>
            <Icon name="filter-outline" size={25} color="white" />
          </TouchableOpacity>
        })}
        >
          <Drawer.Screen name="Porcentaje simple" component={ SimpleScreen } />
          <Drawer.Screen name="Descuento" component={ DescuentoScreen } />
          <Drawer.Screen name="Propina" component={ PropinaScreen } />
          <Drawer.Screen name="Iva" component={ IvaScreen } />
          <Drawer.Screen name="Aumento de precio" component={ AumentoScreen} />
          <Drawer.Screen name="Fracciones" component={ FraccionesScreen } />
        </Drawer.Navigator>
      );
}