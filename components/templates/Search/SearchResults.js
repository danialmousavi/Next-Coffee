import Card from '@/components/modules/Card/Card'
import React from 'react'

export default function SearchResults({ searchResults }) {
  const hotItems = searchResults.filter(item => item.type === "hot");
  const coldItems = searchResults.filter(item => item.type === "cold");

  return (
    <div className="container-fluid pt-5">
      <div className="container">
        <div className="section-title">
          <h4 className="text-primary text-uppercase" style={{ letterSpacing: "5px" }}>
            Menu & Pricing
          </h4>
          <h1 className="display-4">Competitive Pricing</h1>
        </div>
        <div className="row">
          
          {/* Hot Coffee */}
            {hotItems.length?(
        <div className="col-lg-6">
            <h1 className="mb-5">hot Coffee</h1>
                {hotItems.map(item=>(
                    <Card key={item.id} {...item}/>
                ))}
          </div>
            ):null}
          {/* Cold Coffee */}
            {coldItems.length?(
        <div className="col-lg-6">
            <h1 className="mb-5">Cold Coffee</h1>
                {coldItems.map(item=>(
                    <Card key={item.id} {...item}/>
                ))}
          </div>
            ):null}

        </div>
      </div>
    </div>
  );
}
