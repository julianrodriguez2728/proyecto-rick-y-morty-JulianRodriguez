import { useState } from "react";

export default function SearchBar({onSearch}) {
   const [id, setId] = useState("") 

   const handleChange = (event)=>{
      setId(event.target.value)
   }


   return (
      <div className="searchContainer">
         <input className="searchBar navSearch" type='search' onChange={handleChange} value={id} />
         <button className="boton-search" onClick={()=> {onSearch(id); setId('')}}>Agregar</button>
      </div>
   );
}
