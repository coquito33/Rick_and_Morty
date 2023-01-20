import { useState } from "react";
import Validation from "./validation";

const Form = (props) => {
    const initialState = { username: '', password: '' }
    const [userData, setUserData] = useState(initialState);
    const [errors, setErrors] = useState(initialState)

    const handleOnChange = (event) => {
        setUserData(
            {...userData, 
            [event.target.name] : event.target.value}
        )

        setErrors(Validation(
            {...userData, 
            [event.target.name] : event.target.value}
        )
           
        )

    }

return(
    <div>
    
    <label htmlFor="username">Username</label>
    <input onChange={handleOnChange} name="username" type="text" value={userData.username}/>
    <h1>{errors.username}</h1>
    
    <label htmlFor="password">Password</label>
    <input onChange={handleOnChange} name="password" type="password" value={userData.password}/>
    <h1>{errors.password}</h1>

    <button>login</button>
    </div>
)

}
export default Form;