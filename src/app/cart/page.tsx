import React from "react";
import { Metadata } from "next";
import CartMain from "@/pages/cart/cart-main";

export const metadata: Metadata = {
  title: "The-X-Media - Cart page",
};

const CartPage = () => {
  return (
    <CartMain/>
  );
};

export default CartPage;
