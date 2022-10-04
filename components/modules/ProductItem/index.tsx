import React from "react";
import Image from "next/image";
import { Product } from "../../../type/type";
// type ProductItemProps = {
//     product: Product
// }
const ProductItem = ({product}: {product: Product}) => {
  return (
    <li className="product-item col-3">
      <div className="product-image">
        <Image src={product.image} width={100} height={100} />
      </div>
      <h5 className="product-name">{product.productName}</h5>
      <span className={`product-price ${product.salePrice && `old-price`}`}>
        £&nbsp;{product.normalPrice}
      </span>
      {product.salePrice && (
        <span className="product-sale">£&nbsp;{product.salePrice}</span>
      )}
    </li>
  );
};

export default ProductItem;
