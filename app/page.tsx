"use client"
import { CustomFilter, Hero, SearchBar } from '@/components'
import './globals.css';




export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero/>
<div className='mt-12 padding-x padding-y max-width' id="discover">
  <h1 className='text-4xl dont-extrabold'>
      Clothes catalogue
  </h1>
  <h2>Explore the clothes that  suit your personality!</h2>
</div>
<div className='home__filters'>
  <SearchBar/ >
<div className='home__filter-container '>
  <CustomFilter/>
  <CustomFilter />


</div>
</div>

    </main> 
  )
}
