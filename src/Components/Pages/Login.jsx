import React from "react";
import { AuthContext } from "../Context";
import Button from "../UI/Buttons";
import Input from "../UI/Input";

const Login = () => {
    const {setIsAuth} = React.useContext(AuthContext)

    const login = event => {
        event.preventDefault()
        setIsAuth(true)
        localStorage.setItem('auth', true)

    }
    return ( 
        <div>
            <h3>Login</h3>
            <form onSubmit={login}>
                <Input type='text' placeholder='Login'></Input>
                <Input type='password' placholder='Password'></Input>
                <div>
                    <Button>Login</Button>
                </div>
            </form>
        </div>
     );
}
 
export default Login;