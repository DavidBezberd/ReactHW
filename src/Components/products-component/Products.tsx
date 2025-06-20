import { useEffect } from 'react';
import { useState } from 'react';
import './Products.css';
import type {ProductModel} from '../../models/ProductModel';
import {loadProducts} from '../../service/api.service';
import { Post } from '../product-component/Product';

export const Products  = () => {
    const [product, setProduct] = useState<ProductModel[]>([]);
    useEffect(() => {
     async function fetchPosts(){
        let allPosts = await loadProducts();
        setProduct(allPosts);
     } 

     fetchPosts();
    }, []);
    return (
        <div>
          {product.map(product => (
            <Post product={product} key={product.id} />
          ))}
        </div>
      );
};