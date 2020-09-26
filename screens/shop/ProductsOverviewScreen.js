import React from "react";
import { FlatList, Button } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../../components/ui/HeaderButton";
import { useSelector, useDispatch } from "react-redux";
import ProductItem from "../../components/shop/ProductItem";
import * as cartActions from "../../store/actions/cart";
import Colors from "../../constants/Colors";

const ProductsOverviewScreen = ({ navigation }) => {
  const products = useSelector((state) => state.products.availableProducts);
  const dispatch = useDispatch();

  const selectItemHandler = (id, title) => {
    navigation.navigate("Product details", {
      productId: id,
      productTitle: title,
    });
  };

  return (
    <FlatList
      data={products}
      keyExtractor={(item) => item.id}
      renderItem={(itemData) => {
        const { id, title, price, imageUrl } = itemData.item;
        return (
          <ProductItem
            title={title}
            price={price}
            imageUrl={imageUrl}
            onSelect={() =>
              selectItemHandler(itemData.item.id, itemData.item.title)
            }
            onAddToCart={() => dispatch(cartActions.addToCart(itemData.item))}
          >
            <Button
              color={Colors.primary}
              title="View details"
              onPress={() =>
                selectItemHandler(itemData.item.id, itemData.item.title)
              }
            />
            <Button
              color={Colors.primary}
              title="To cart"
              onPress={() => dispatch(cartActions.addToCart(itemData.item))}
            />
          </ProductItem>
        );
      }}
    />
  );
};

export const screenOptions = (navData) => {
  return {
    headerTitle: "All Products",
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Menu"
          iconName={Platform.OS === "android" ? "md-menu" : "ios-menu"}
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Cart"
          iconName={Platform.OS === "android" ? "md-cart" : "ios-cart"}
          onPress={() => {
            navData.navigation.navigate("Cart");
          }}
        />
      </HeaderButtons>
    ),
  };
};

export default ProductsOverviewScreen;
