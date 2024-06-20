import React, { useState } from 'react'
import './Explore.css'
import ExploreComponent from './ExploreComponent'
import GridExploreComponent from './GridExploreComponent'
export default function Explore() {


    const popularCusines = ['Bakery food near me','Beverages food near me','Biryani food near me', 'Burger food near me','Chinese food near me', 'Coffee food near me','Desserts food near me','Momos food near me','Mughlai food near me','North Indian food near me','Pasta food near me','Pizza food near me','Rolls food near me','Sandwich food near me','Seafood food near me','Shake food near me','South Indian food near me','Street food near me','Tea food near me','Wraps food near me']
    const resturantsNearMe = ['Bakeries near me','Beverage Shops near me','Cafés near me','Casual Dining near me','Dhabas near me','Food Courts near me','Food Trucks near me','Quick Bites near me','Sweet Shops near me']
    let cities = [
    "Delhi NCR", "Kolkata", "Mumbai", "Bengaluru", "Pune", "Hyderabad",
    "Chennai", "Lucknow", "Kochi", "Jaipur", "Ahmedabad", "Chandigarh",
    "Goa", "Indore", "Gangtok", "Nashik", "Ooty", "Shimla", "Ludhiana",
    "Guwahati", "Amritsar", "Kanpur", "Allahabad", "Aurangabad", "Bhopal",
    "Ranchi", "Visakhapatnam", "Bhubaneswar", "Coimbatore", "Mangalore",
    "Vadodara", "Nagpur", "Agra", "Dehradun", "Mysore", "Puducherry",
    "Surat", "Varanasi", "Patna", "Udaipur", "Srinagar", "Khajuraho",
    "Neemrana", "Cuttack", "Trivandrum", "Haridwar", "Leh", "Pushkar",
    "Rajkot", "Madurai", "Kozhikode", "Alappuzha", "Thrissur", "Manipal",
    "Vijayawada", "Jodhpur", "Kota", "Ajmer", "Mussoorie", "Rishikesh",
    "Jalandhar", "Jammu", "Manali"
];

  return (
    <div className='top6'>
    <div className="top6_1">
    <p className='txt130'>Explore options near me</p>
    
    <ExploreComponent title='Popular cuisines near me' content={popularCusines}/>
    <ExploreComponent title='Popular restaurant types near me' content={resturantsNearMe}/>
    <GridExploreComponent title='Cities We Deliver To' content={cities}/>

</div>
    </div>
  )
}
