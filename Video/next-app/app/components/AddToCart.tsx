'use client';
import React from 'react';

function AddToCart() {
    return (
        <div>
            <button className={"btn btn-primary"} onClick={()=>{alert("add to cart")}}>Add to Cart</button>
        </div>
    );
}

export default AddToCart;