import React from "react";
import { FlatList } from "react-native";
import { useSelector } from "react-redux";
import ProductItem from "../../components/shop/ProductItem";

const ProductsOverviewScreen = ({ navigation }) => {
  const products = useSelector((state) => state.products.availableProducts);
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
            onAddToCart={() => {}}
          />
        );
      }}
    />
  );
};

export default ProductsOverviewScreen;
