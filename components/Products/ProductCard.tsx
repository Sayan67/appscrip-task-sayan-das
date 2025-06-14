import React from "react";
import styles from "./productcard.module.css";
import Image from "next/image";
import { Heart } from "iconsax-reactjs";

export interface ProductCardProps {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

function ProductCard({
  products,
  favourites,
  onFavouriteToggle,
}: {
  products: ProductCardProps;
  favourites: boolean;
  onFavouriteToggle: () => void;
}) {
  return (
    <div className={styles.cardContainer}>
      <Image
        src={products.image}
        width={300}
        height={399}
        alt={products.title}
        className={styles.productImage}
      />
      <div className={styles.productDetails}>
        <div className={styles.productInfo}>
          <h3 className={styles.productTitle}>{products.title}</h3>
          <p
            style={{
              color: "var(--text-muted)",
              display: "flex",
              alignItems: "center",
              gap: "0.1rem",
              textWrap: "nowrap",
            }}
            className={styles.productPrice}
          >
            <span
              style={{
                fontWeight: "bold",
                fontSize: "14px",
                textDecoration: "underline",
                cursor: "pointer",
              }}
            >
              Sign in
            </span>
            or Create an account to see pricing
          </p>
        </div>
        <Heart
          onClick={onFavouriteToggle}
          size={24}
          color={favourites ? "#EB4C6B" : "#292D32"}
          style={{
            fill: favourites ? "#EB4C6B" : "",
            width: "24px",
            height: "24px",
            cursor: "pointer",
            transition: "color 0.3s ease",
          }}
        />
      </div>
    </div>
  );
}

export default ProductCard;
