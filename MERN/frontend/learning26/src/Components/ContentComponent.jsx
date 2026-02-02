import React from 'react'
import download from '../assets/download.jpg'

export default function Contentcomponent() {
     var student= {
     Name:"Shyam Sapariya",
     Age:"21",
     city:"Manavadar",
     pincode:"362630"
     };
  return (
    <div style={{border:"1px solid blue",display:'flex' }}>
       
    <p> <span style={{display:'block'}}>Krishna is a major deity in Hinduism, worshipped as the eighth avatar of Vishnu and as the Supreme God, known for love, compassion, and protection, central to texts like the Bhagavad Gita, where he imparts profound wisdom on duty, reality, and devotion (bhakti) to Arjuna during the Mahabharata war.</span>
          
    </p>
    <img src={download} /> 
 
    </div>
  )
}