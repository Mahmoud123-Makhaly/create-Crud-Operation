import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ViewCart = () => {
    const[cards , setCards] = useState([])
    const params = useParams();;
useEffect(()=>{
fetch(`http://localhost:3500/carts/${params.id}`)
.then((res)=>res.json())
.then((data)=>setCards(data))
} , [])
 console.log('cards' , cards)
  return (
    <div>
 <h2 style={{textAlign:"center"}}>Date: {cards.date}</h2>
    </div>
  )
}

export default ViewCart