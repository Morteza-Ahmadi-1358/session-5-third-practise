import React, { useEffect, useState } from 'react'
import {getProducts} from '../database/Products'
import Loading from './Loading'

const ProductsList = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        setTimeout(() => {
            setProducts(getProducts());
            return () => {
                setProducts([]);
            }
        }, 2000);
    }, []);
    if (products.length === 0) {
        return <Loading />
    }
  return (
    <div>
        {
            products.map((product) => {
                return <h6>{product.productName}</h6>
            })
        }
    </div>
  )
}

export default ProductsList