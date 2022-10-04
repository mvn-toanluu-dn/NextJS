import React from 'react'
import Intro from './Intro/index';
import Services from './services/index';
import Popular from './Popular/index';
import { Product } from '../../../type/type';
type HomeProps = {
  products: Product[]
}
export default function HomePage({products}:HomeProps):JSX.Element {
  return (
    <div className='page-home'>
        <Intro />
        <Services />
        <Popular products={products} />
    </div>
  )
}

