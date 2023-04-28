import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Detail.css"

// const URL_BASE = 'https://be-a-rym.up.railway.app/api/character';
// const API_KEY = 'a45813b04fae.b0ec9381cd609b70a80f';



const Detail = ()=>{
    const {id} = useParams();
    const [character , setCharacter ] = useState({})
    useEffect(()=>{
        axios(`http://localhost:3001/rickandmorty/character/${id}`)
        .then(response => response.data)
        .then((data) => {
            if (data.name) {
               setCharacter(data);
            } else {
               window.alert('No hay personajes con ese ID');
            }
         });
         return setCharacter({});
    },[id])
    return (
        <div className="container">
        <div className="detail-container">
            <img src={character?.image} alt={character?.name} className="img-card"/>
            <div className="property-container">
            <h2 className="title">{character?.name}</h2>
            <h2>{character?.status}</h2>
            <h2>{character?.species}</h2>
            <h2>{character?.origin?.name}</h2>
            </div>
        </div>
        </div>
    )
}

export default Detail;