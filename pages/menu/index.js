import PageHeader from '@/components/modules/PageHeader/PageHeader'
import Pricing from '@/components/templates/Menu/Pricing'
import React from 'react'

export default function Menu({data}) {
  return (
    <>
    <PageHeader route={"Menu"}/>
    <Pricing menu={data}/>
    </>
  )
}
export async function getStaticProps() {
  const res=await fetch("http://localhost:4000/menu")
  const data=await res.json();

  return{
    props:{
      data
    },
    revalidate:60*60*6 //every 6 hour
  }
}