import {DATA_STATE} from '../Utils/dataState';
import {ProductModel} from '../../Models/Product';
import {ProductImp} from "./ProductImp";

const ProductRepository = (set: any) => {
    return {
        setProduct: (product: ProductModel) => ProductImp.setProduct({set, product}),
        addToCart: (product: ProductModel) => ProductImp.addToCart({set, product}),
        addSameProdInCart: (product: ProductModel) =>
            ProductImp.addSameProdInCart({set, product}),
        removeSameProdInCart: (product: ProductModel) =>
            ProductImp.removeSameProdInCart({set, product}),
        deleteFromCart: (product: ProductModel) => ProductImp.deleteFromCart({set, product}),
    };
};

export default ProductRepository;
