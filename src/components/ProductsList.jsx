import React, { useEffect, useState } from 'react'
import {getProducts} from '../database/Products'
import Loading from './Loading'

const ProductsList = () => {
    const [products, setProducts] = useState([]);
    const [refresh, setRefresh] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setProducts(getProducts());
            return () => {
                setProducts([]);
            }
        }, 2000);
        return () => {
            setProducts([]);
        }
    }, [refresh]);
    if (products.length === 0) {
        return <Loading />
    }
  return (
    <div className='mt-3 text-center mx-auto'>
        {
            products.map((product) => {
                return <img src={product.imageUrl} alt='{product.productName}' className='m-3 border rounded shadow' />
            })
        }
        <button type="button" className='w-25 mx-auto btn btn-danger fixed-top' onClick={() => {setRefresh(!refresh)}}>بارگذاری مجدد</button>
    </div>
  )
}

export default ProductsList