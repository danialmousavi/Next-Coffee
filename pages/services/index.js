import PageHeader from '@/components/modules/PageHeader/PageHeader'
import ServicesDetail from '@/components/templates/Services/ServicesDetail'
import React from 'react'

export default function index({serviceData}) {
  return (
    <>
    <PageHeader route={"services"}/>
    <ServicesDetail  serviceData={serviceData}/>
    </>
  )
}
export async function getStaticProps() {
  const res=await fetch("http://localhost:4000/services");
  const serviceData=await res.json();
  
  return{
    props:{
      serviceData
    }
  }
}