"use client";
import React, { useEffect, useState } from "react";
import styles from "./products.module.css";
import { useAtom } from "jotai";
import { productsAtom } from "@/store/products";
import { useProducts } from "@/hooks/useProducts";
import Image from "next/image";
import ProductCard, { ProductCardProps } from "./ProductCard";

function Products() {
  const { products, loading, error } = useProducts();
  const [favourites, setFavourites] = useState<Pick<ProductCardProps, "id">[]>(
    []
  );

  function handleFavouriteToggle(productId: number) {
    setFavourites((prevFavourites) => {
      const isFavourite = prevFavourites?.some((fav) => fav?.id === productId);
      if (isFavourite) {
        return prevFavourites?.filter((fav) => fav?.id !== productId);
      } else {
        return [...prevFavourites, { id: productId }];
      }
    });
    console.log(`Product ${productId} favourite status toggled.`);
  }
  useEffect(() => {
    console.log("Favourites updated:", favourites);
  }, [favourites]);

  if (loading) return <p>Loading products...</p>;
  if (error) return <p>{error}</p>;
  return (
    <div className={styles.productsContainer}>
      {products.map((product, i) => (
        <ProductCard
          key={product.id}
          products={product}
          favourites={
            favourites?.filter((fav) => fav?.id === product.id).length > 0
          }
          onFavouriteToggle={() => handleFavouriteToggle(product.id)}
        />
      ))}
    </div>
  );
}

export default Products;
