import PageHeader from '@/components/modules/PageHeader/PageHeader'
import ReseveTable from '@/components/templates/Index/ReseveTable'
import React from 'react'

export default function Reservation() {
  return (
    <>
    <PageHeader route={"Reservation"}/>
    <ReseveTable/>
    </>
  )
}
