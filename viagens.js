import React from "react"
import ReactDOM from "react-dom"
import data from "./data.js"
import Card from "./card.js"

export default function Viagens(){
    const content = data.map((item)=><Card
    {...item}
     />)
    return (
        <div>
        {content}
        </div>
    )
} 

