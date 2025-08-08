import TestimonialItem from '@/components/modules/TestimonialItem/TestimonialItem';
import React from 'react'

export default function Testimonial({TestimonialData}) {
    
  return (
    <div className="container-fluid py-5">
        <div className="container">
            <div className="section-title">
                <h4 className="text-primary text-uppercase" style={{letterSpacing: "5px"}}>Testimonial</h4>
                <h1 className="display-4">Our Clients Say</h1>
            </div>
            <div className="owl-carousel testimonial-carousel">
                {TestimonialData.slice(0,3).map(item=>(
                    <TestimonialItem key={item.id} {...item}/>
                ))}
            </div>
        </div>
    </div>
  )
}
