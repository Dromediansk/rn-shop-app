import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  createDrawerNavigator,
  DrawerItemList,
} from "@react-navigation/drawer";
import ProductsOverviewScreen, {
  screenOptions as productsOverviewScreenOptions,
} from "../screens/shop/ProductsOverviewScreen";
import { screenOptions as ordersScreenOptions } from "../screens/shop/OrdersScreen";
import { screenOptions as AdminScreenOptions } from "../screens/shop/OrdersScreen";
import ProductDetailScreen from "../screens/shop/ProductDetailScreen";
import OrdersScreen from "../screens/shop/OrdersScreen";
import CartScreen from "../screens/shop/CartScreen";
import { defaultNavigationOptions } from "../constants/defaultNavOptions";
import Colors from "../constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import UserProductsScreen from "../screens/shop/UserProductsScreen";

const ProductsStackNavigator = createStackNavigator();

const ProductsNavigator = () => {
  return (
    <ProductsStackNavigator.Navigator screenOptions={defaultNavigationOptions}>
      <ProductsStackNavigator.Screen
        name="All products"
        component={ProductsOverviewScreen}
        options={productsOverviewScreenOptions}
      />
      <ProductsStackNavigator.Screen
        name="Product details"
        component={ProductDetailScreen}
        options={({ route }) => ({ title: route.params.productTitle })}
      />
      <ProductsStackNavigator.Screen name="Cart" component={CartScreen} />
    </ProductsStackNavigator.Navigator>
  );
};

const OrdersStackNavigator = createStackNavigator();

const OrdersNavigator = () => {
  return (
    <OrdersStackNavigator.Navigator screenOptions={defaultNavigationOptions}>
      <OrdersStackNavigator.Screen
        name="Orders"
        component={OrdersScreen}
        options={ordersScreenOptions}
      />
    </OrdersStackNavigator.Navigator>
  );
};

const AdminStackNavigator = createStackNavigator();

const AdminNavigator = () => {
  return (
    <AdminStackNavigator.Navigator screenOptions={defaultNavigationOptions}>
      <AdminStackNavigator.Screen
        name="My Products"
        component={UserProductsScreen}
        options={AdminScreenOptions}
      />
    </AdminStackNavigator.Navigator>
  );
};

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContentOptions={{
        activeTintColor: Colors.primary,
      }}
    >
      <Drawer.Screen
        name="All Products"
        component={ProductsNavigator}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons
              name={Platform.OS === "android" ? "md-cart" : "ios-cart"}
              size={23}
              color={color}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Orders"
        component={OrdersNavigator}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons
              name={Platform.OS === "android" ? "md-list" : "ios-list"}
              size={23}
              color={color}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Admin"
        component={AdminNavigator}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons
              name={Platform.OS === "android" ? "md-create" : "ios-create"}
              size={23}
              color={color}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
