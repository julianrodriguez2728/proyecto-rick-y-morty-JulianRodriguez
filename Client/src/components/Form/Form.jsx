import { useState } from "react";
import validation from "./validation";
import "./Form.css"
import foto from "./logonuevo.png";

const Form = ({login})=>{
    const [userData , setUserData] = useState({
        username: '',
        password: '',
    });
    
    const [errors, setErrors] = useState({
        username:'',
        password:'',
    });
    const handleChange =  (event) => {
        const property = event.target.name;
        const value = event.target.value;
        
        setUserData({...userData , [property] : value})
        setErrors(validation({...userData , [event.target.name] : event.target.value}))
    };
    const submitHandler=(event)=>{
        event.preventDefault()
        login(userData)
    }
    return(
        <div className="form-container">
            <header>
            <img className="foto" src={foto} alt="" />

            </header>
        <form className="form" onSubmit={submitHandler}>
            <img className="foto" src="https://1000marcas.net/wp-content/uploads/2022/04/Rick-and-Morty.png" alt="" />
            <div className="email">
            <label>EMAIL</label>
            <input name ="username" type="text" placeholder="Ingresa su Email" value={userData.username} onChange={handleChange}/> 
            {errors.username && <p>{errors.username}</p>}
            </div>
            <div className="password">
            <label>PASSWORD</label>
            <input name="password" type="password" placeholder="Ingresa su contraseña" value={userData.password} onChange={handleChange} />
            {errors.password && <p>{errors.password}</p>}
            </div>
            <button className="boton-form">submit</button>
        </form>
        </div>
    )
}

export default Form;