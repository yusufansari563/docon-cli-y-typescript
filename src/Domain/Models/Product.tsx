import { CategoryModel } from "./Category";
import { RatingModel } from "./Rating";

export interface ProductModel {
    id?:          number;
    title?:       string;
    price?:       number;
    description?: string;
    category?:    CategoryModel;
    image:       any;
    rating:      RatingModel;
    total:        number;
}