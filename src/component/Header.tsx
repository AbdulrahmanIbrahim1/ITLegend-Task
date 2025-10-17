"use client";
import React from 'react'
import Breadcrumb from './Breadcrumb'

export default function Header() {
  return (
    <div className='bg-[#F5F9FA] p-4 text-black '>
        <Breadcrumb />
        <h1 className='font-bold py-2 text-2xl'>Starting SEO as your Home </h1>
    </div>
  )
}
