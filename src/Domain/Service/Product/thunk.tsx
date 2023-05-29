import React from 'react';
import { ProductGet } from '../../UseCases/ProductService';

export async function getProduct() {
  let product;
  try {
    product = await ProductGet();
    product.then((res: Promise<Response>) => res);
  } catch (error) {}
}
