import * as React from "react";
import Colors from "../constants/Colors";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Platform } from "react-native";

import ProductsOverviewScreen from "../screens/shop/ProductsOverviewScreen";
import ProductDetailScreen from "../screens/shop/ProductDetailScreen";
import CartScreen from "../screens/shop/CartScreen";

const Stack = createStackNavigator();

const ProductsNavigator = () => {
  const defaultNavigationOptions = {
    headerStyle: {
      backgroundColor: Platform.OS === "android" ? Colors.primary : "white",
    },
    headerTitleStyle: {
      fontFamily: "open-sans-bold",
    },
    headerBackTitleStyle: {
      fontFamily: "open-sans",
    },
    headerTintColor: Platform.OS === "android" ? "white" : Colors.primary,
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="All Products"
          component={ProductsOverviewScreen}
          options={{
            ...defaultNavigationOptions,
          }}
        />
        <Stack.Screen
          name="Product details"
          component={ProductDetailScreen}
          options={({ route }) => ({ title: route.params.productTitle })}
        />
        <Stack.Screen name="Cart" component={CartScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default ProductsNavigator;
