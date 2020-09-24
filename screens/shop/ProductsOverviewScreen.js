import React from "react";
import { FlatList } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../../components/ui/HeaderButton";
import { useSelector, useDispatch } from "react-redux";
import ProductItem from "../../components/shop/ProductItem";
import * as cartActions from "../../store/actions/cart";
import Colors from "../../constants/Colors";

const ProductsOverviewScreen = ({ navigation }) => {
  const products = useSelector((state) => state.products.availableProducts);
  const dispatch = useDispatch();

  navigation.setOptions({
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Cart"
          color={Colors.primary}
          iconName={Platform.OS === "android" ? "md-cart" : "ios-cart"}
          onPress={() => {
            navigation.navigate("Cart");
          }}
        />
      </HeaderButtons>
    ),
  });

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
            onViewDetail={() =>
              navigation.navigate("Product details", {
                productId: id,
                productTitle: title,
              })
            }
            onAddToCart={() => dispatch(cartActions.addToCart(itemData.item))}
          />
        );
      }}
    />
  );
};

export default ProductsOverviewScreen;
