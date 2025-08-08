import ProductDetails from '@/components/templates/Product/ProductDetails'
import React from 'react'

export default function Prouduct({product}) {
  return (
    <>
    <ProductDetails data={product}/>
    </>
  )
}
export async function getStaticPaths() {
      const res=await fetch(`http://localhost:4000/menu`);
      const products=await res.json();
      const paths=products.map(item=>({
        params:{id:item.id.toString()}
      }))  
      return{
        paths,
        fallback:false
      }
}
export async function getStaticProps(context) {
    const {params}=context;
    const res=await fetch(`http://localhost:4000/menu/${params.id}`);
    const product=await res.json();
    console.log(product);

    return{
      props:{
        product
      }
    }
    
}