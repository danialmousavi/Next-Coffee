import ServiceItem from '@/components/modules/ServiceItem/ServiceItem'
import React from 'react'

export default function Services() {
  return (
     <div className="container-fluid pt-5">
        <div className="container">
            <div className="section-title">
                <h4 className="text-primary text-uppercase" style={{letterSpacing: "5px"}}>Our Services</h4>
                <h1 className="display-4">Fresh & Organic Beans</h1>
            </div>
            <div className="row">
                <ServiceItem img="/img/service-1.jpg" title="Fastest Door Delivery" icon="faTruck" desc="Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et et
            lorem dolor sed est sit invidunt, dolore tempor diam ipsum takima
            erat tempor"/>
                <ServiceItem img="/img/service-2.jpg" title="Fresh Coffee Beans" icon="faCoffee" desc="Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et et
            lorem dolor sed est sit invidunt, dolore tempor diam ipsum takima
            erat tempor"/>
            <ServiceItem img="/img/service-3.jpg" title="Best Quality Coffee" icon="faAward" desc="Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et et
            lorem dolor sed est sit invidunt, dolore tempor diam ipsum takima
            erat tempor"/>
            <ServiceItem img="/img/service-4.jpg" title="Online Table Booking" icon="faTable" desc="Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et et
            lorem dolor sed est sit invidunt, dolore tempor diam ipsum takima
            erat tempor"/>
            </div>
        </div>
    </div>
  )
}
