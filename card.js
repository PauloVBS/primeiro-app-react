import React from "react"
import ReactDOM from "react-dom"

export default function Card(props){
    return(
        <div className="card">
        <img src={props.imageUrl} className="image"/>
        <h3 className="title">{props.title}-{props.location}</h3>
        <p className="dates">{props.startDate}-{props.endDate}</p>
        <p className="description">{props.description}</p>
        
        </div>
    )
}