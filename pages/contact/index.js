import PageHeader from '@/components/modules/PageHeader/PageHeader'
import ContactDetails from '@/components/templates/Contact/Details'
import React from 'react'

export default function Contact() {
  return (
    <>
    <PageHeader route={"Contact Us"}/>
    <ContactDetails/>
    </>
  )
}
