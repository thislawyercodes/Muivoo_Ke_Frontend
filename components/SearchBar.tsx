"use client"
import React, { use } from 'react';
import SearchItem from './SearchItem';
import { useState } from 'react';



const handleSearch=() =>{}

const SearchBar = () => {
    const [vendor,searchVendor]=useState('');
    useState('')
    return ( 
        <form className='searchbar' onSubmit={handleSearch}>
            <div className='searchbar__item'>
                <SearchItem  
                vendor={vendor}   
                searchVendor={searchVendor }        
                />

            </div>

        </form>
    )
}



export default SearchBar;