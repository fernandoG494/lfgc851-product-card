import { InitialValues, Product, onChangeArgs } from '../interfaces/interfaces';
interface useProductArgs {
    product: Product;
    value?: number;
    initialValues?: InitialValues;
    onChange?: (args: onChangeArgs) => void;
}
export declare const useProduct: ({ onChange, product, value, initialValues }: useProductArgs) => {
    counter: number;
    isMaxCountReached: boolean;
    maxCount: number | undefined;
    increaseBy: (value: number) => void;
    reset: () => void;
};
export {};
