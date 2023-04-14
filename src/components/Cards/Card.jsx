import { Link } from "react-router-dom";
import "./Cards.css"
import { addFav, removeFav } from "../../redux/actions";
import { connect } from "react-redux";
import { useState } from "react";

 function Card({ id , name , image , onClose, addFav,removeFav, myFavorites}) {
   
   const [isFav, setIsFav]= useState(false);

   const handleFavorite = ()=>{
      if(isFav){
         setIsFav(false);
         removeFav(id);
      }
      else{
         setIsFav(true)
         addFav({id , name , image , onClose,})
      }
   }
   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === props.id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);
   
   return (
      <div className="card-container">
            {
      isFav ? (
         <button onClick={handleFavorite}>❤️</button>
      ) : (
         <button onClick={handleFavorite}>🤍</button>
      )
   }
            <button onClick={()=> onClose(id)} className="boton-x">X</button>
         <img src={image} alt='' className="img-card"/>
         <Link to={`/detail/${id}`}>
         <h2 className="title">{name}</h2>
         </Link>
         {/* <h2>{species}</h2>
         <h2>{gender}</h2>
         <h2>{status}</h2>
         <h2>{origin}</h2>    */}
      </div>
   );
}
const mapStateToProps = ()=>{
   return{
      myFavorites: state.myFavorites
   }
}
const mapDispatchToProps= (dispatch)=>{
   return{
      addFav: (character)=>{dispatch(addFav(character))},
      removeFav: (id) => { dispatch(removeFav(id)) }

   }
}

export default connect(mapStateToProps,mapDispatchToProps)(Card)