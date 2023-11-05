import React from 'react';
import AddToCart from "@/app/components/AddToCart";

import styles from "./ProductCard.module.css"

function ProductCard() {
    return (
        <div className={styles.card}>
            <p>this is product card</p>
            <AddToCart/>
        </div>
    );
}

export default ProductCard;