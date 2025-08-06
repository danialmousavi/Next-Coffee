import About from '@/components/templates/Index/About'
import Services from '@/components/templates/Index/Services'
import Slider from '@/components/templates/Index/Slider'
import React from 'react'

export default function index() {
  return (
    <>
      <Slider/>
      <About/>
      <Services/>
    </>
  )
}
