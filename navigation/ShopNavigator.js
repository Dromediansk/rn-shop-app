import * as React from "react";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Platform } from "react-native";

import ProductsOverviewScreen from "../screens/shop/ProductsOverviewScreen";

const Stack = createStackNavigator();

const ProductsNavigator = () => {
  const defaultNavigationOptions = {
    headerStyle: {
      backgroundColor: Platform.OS === "android" ? Colors.primary : "",
    },
    headerTintColor: Platform.OS === "android" ? "white" : Colors.primary,
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="All Products"
          component={ProductsOverviewScreen}
          options={defaultNavigationOptions}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default ProductsNavigator;
