import Image from 'next/image';
import React from 'react'
import ProductItem from '../../components/modules/ProductItem';
import { Product } from "../../type/type";

export const getStaticProps = async () => {
    const res = await fetch("https://6336ba535327df4c43c81ae6.mockapi.io/users")
    const products = await res.json();
    return { 
        props: {products}
    }
}
// export const getStaticPaths = async () => {
//     const res = await fetch("https://6336ba535327df4c43c81ae6.mockapi.io/users");
//     const products = await res.json();

//     const paths = products.map(product => {
//         return {
//             params: {id: product.id.toString() }
//         }
//     })
//     return {
//         paths,
//         fallback: false
//     }
// }
const Product= ({products} : {products:Product[]}) => {
  return (
     <section className='product-detail'>
        <h3 className='product-title'>Product List</h3>
        <ul className='product-item-detail'>
          {products.map((product, index) => {
            return (
              <ProductItem product={product} key={index} />
            )
          })}
        </ul>
    </section>

  )
}

export default Product