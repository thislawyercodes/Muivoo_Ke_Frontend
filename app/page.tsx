"use client"
import { CustomFilter, Hero, ProductItem, Products, SearchBar } from "@/components";
import './globals.css';

export default async function Home() {
  
  return (
    <main className="overflow-hidden">
      <Hero />
      <div id="discover" className='flex-1 pt-5 md:pt-5 padding-x bg-white'>
        <h1 className='text-3xl font-bold'>
          Clothes catalogue
        </h1>
        <h2 className='text-lg font-normal'>
          Explore the clothes that suit your personality!
        </h2>
        <div className='flex-1 pt-5 md:pt-5 '>
        <SearchBar />
        <div className='home__filter-container'>
        </div>
      </div>
        <div className='home__products-wrapper'>
          <Products/>
        </div>
      </div>
     
    </main>
  );
}
