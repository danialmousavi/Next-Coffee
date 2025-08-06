import About from '@/components/templates/Index/About'
import Menu from '@/components/templates/Index/Menu'
import Offer from '@/components/templates/Index/Offer'
import ReseveTable from '@/components/templates/Index/ReseveTable'
import Services from '@/components/templates/Index/Services'
import Slider from '@/components/templates/Index/Slider'
import React from 'react'

export default function index({data}) {
  return (
    <>
      <Slider/>
      <About/>
      <Services services={data.services}/>
      <Offer/>
      <Menu menu={data.menu}/>
      <ReseveTable/>
    </>
  )
}
export async function getStaticProps(){
  const res=await fetch("http://localhost:4000/services")
  const services= await res.json();

  const resMenu=await fetch("http://localhost:4000/menu")
  const menuData=await resMenu.json();
  return {
    props:{
      data:{
        services,
        menu:menuData
      }
    }
  }
}