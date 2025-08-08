import ProductComments from '@/components/templates/Product/ProductComments';
import ProductDetails from '@/components/templates/Product/ProductDetails'
import React from 'react'

export default function Prouduct({product,productComments}) {
  return (
    <>
    <ProductDetails data={product}/>
    <ProductComments data={productComments}/>
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

    const commentsResponse=await fetch("http://localhost:4000/comments");
    const AllComments=await commentsResponse.json();

    const productComments=AllComments.filter(comment=>comment.productID==params.id);
    
    return{
      props:{
        product,
        productComments
      },
    revalidate:60*60*12

    }
    
}