import React from "react";
import Image from "next/image";
import { Product } from "../../../../type/type";
type PopularProps = {
  products: Product[];
};

function Popular({ products }: PopularProps) {
  return (
    <section className="section-popular">
      <div className="container">
        <h6 className="section-sub-title">The Best Choice</h6>
        <h2 className="section-title">Popular Courses</h2>
        <ul className="product-list">
          {products.map((product, index) => {
            return (
              <li className="product-item col-3" key={index}>
                <div className="product-image">
                  <Image src={product.image} width={100} height={100} />
                </div>
                <h5 className="product-name">{product.productName}</h5>
                <span
                  className={`product-price ${
                    product.salePrice && `old-price`
                  }`}
                >
                  £&nbsp;{product.normalPrice}
                </span>
                {product.salePrice && (
                  <span className="product-sale">
                    £&nbsp;{product.salePrice}
                  </span>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
export default Popular;
