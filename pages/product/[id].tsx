import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { Product } from "../../type/type";


export const getStaticPaths = async () => {
    const res = await fetch("https://6336ba535327df4c43c81ae6.mockapi.io/users");
    const data = await res.json();
    const paths = data.map((item:Product) => {
        return {
            params: { id: item.id.toString()}
        }
    })
  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async({params} : any ) => {
    const id = params.id  ; 
    
    const res = await fetch(`https://6336ba535327df4c43c81ae6.mockapi.io/users/`+ id);
    const data = await res.json();
  return {
    props:{data}
  };
};
const ProductDetail = ({data} :{data: Product}) => {
  const router = useRouter()

  // If the page is not yet generated, this will be displayed
  // initially until getStaticProps() finishes running
  if (router.isFallback) {
    return <div>Loading...</div>
  }
  return <>
  <h3 className="detail-title">Product Detail</h3>
  <div className="product-detail-item">
    <div className="product-detail-img">
    <Image src={data.image} alt={data.image} width={100} height={100}/>
    </div>
    <div className="product-detail-info">
    <h4 className="product-detail-name">{data.productName}</h4>
    <span className={`product-detail-price ${data.salePrice && `product-detail-old-price`}`}>
    £&nbsp;{data.normalPrice}
    </span>
    {data.salePrice && (
        <span className="product-detail-sale"> - £&nbsp;{data.salePrice}</span>
    )}
    </div>
    
  </div>
  </>
};

export default ProductDetail;
