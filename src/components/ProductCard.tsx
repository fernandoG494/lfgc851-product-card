import React, { createContext, CSSProperties } from "react";
import { useProduct } from "../hooks/useProduct";
import { ProductContextProps, Product, onChangeArgs, InitialValues, ProductCardHandlers } from "../interfaces/interfaces";

import styles from "../styles/styles.module.css";

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface Props {
  className?: string;
  initialValues?: InitialValues;
  product: Product;
  style?: CSSProperties;
  value?: number; 
  children: (args: ProductCardHandlers) => JSX.Element;
  onChange?: (args: onChangeArgs) => void;
}

export const ProductCard = ({ children, product, className, style, value, initialValues, onChange }: Props) => {
  const { counter, maxCount, increaseBy, isMaxCountReached, reset } = useProduct({onChange, product, value, initialValues });

  return (
    <Provider
      value={{
        counter,
        maxCount,
        product,
        increaseBy,
      }}
    >
      <div className={`${styles.productCard} ${className}`} style={style}>
        { children({
          count: counter,
          isMaxCountReached,
          maxCount: initialValues?.maxCount,
          product,
          increaseBy,
          reset,
        }) }
      </div>
    </Provider>
  );
};
