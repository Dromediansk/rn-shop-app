import React from "react";
import { FlatList } from "react-native";
import { useSelector } from "react-redux";
import ProductItem from "../../components/shop/ProductItem";

const ProductsOverviewScreen = () => {
  const products = useSelector((state) => state.products.availableProducts);
  return (
    <FlatList
      data={products}
      keyExtractor={(item) => item.id}
      renderItem={(itemData) => {
        const { title, price, imageUrl } = itemData.item;
        return (
          <ProductItem
            title={title}
            price={price}
            imageUrl={imageUrl}
            onViewDetail={() => {}}
            onAddToCart={() => {}}
          />
        );
      }}
    />
  );
};

export default ProductsOverviewScreen;
