import PageHeader from '@/components/modules/PageHeader/PageHeader'
import SearchResults from '@/components/templates/Search/SearchResults';
import React from 'react'

export default function Search({searchResults}) {
  return (
   <>
   <PageHeader route={"Search"}/>
   <SearchResults searchResults={searchResults}/>
   </>
  )
}

export async function getServerSideProps(context) {
  const {query}=context;
  const res=await fetch("http://localhost:4000/menu");
  const data=await res.json();

  const searchResults=data.filter(item=>item.type.toLowerCase().includes(query.q.toLowerCase())||item.title.toLowerCase().includes(query.q.toLowerCase()))
  return{
    props:{
      searchResults
    },
  }
  
}