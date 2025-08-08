import PageHeader from '@/components/modules/PageHeader/PageHeader'
import Comments from '@/components/templates/Testimonial/Comments';
import React from 'react'

export default function Testimonial({commentsData}) {
  return (
    <>
    <PageHeader route={"Comments"}/>
    <Comments commentsData={commentsData}/>
    </>
  )
}
export async function getStaticProps() {
  const res=await fetch("http://localhost:4000/comments");
  const commentsData=await res.json();
  return{
    props:{
      commentsData
    }
  }
}