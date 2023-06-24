import React, { CSSProperties } from "react";
import { ProductContextProps, Product, onChangeArgs, InitialValues, ProductCardHandlers } from "../interfaces/interfaces";
export declare const ProductContext: React.Context<ProductContextProps>;
export interface Props {
    className?: string;
    initialValues?: InitialValues;
    product: Product;
    style?: CSSProperties;
    value?: number;
    children: (args: ProductCardHandlers) => JSX.Element;
    onChange?: (args: onChangeArgs) => void;
}
export declare const ProductCard: ({ children, product, className, style, value, initialValues, onChange }: Props) => React.JSX.Element;
