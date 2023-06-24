import React, { CSSProperties } from "react";
export interface Props {
    title?: string;
    className?: string;
    activeClass?: string;
    style?: CSSProperties;
}
export declare const ProductTitle: ({ title, className, style }: Props) => React.JSX.Element;
