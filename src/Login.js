import React from "react";
import "./Login.css";

import { Button } from "@material-ui/core";

import { authentication, provider } from "./firebase";

import { actionTypes } from "./reducer";
import { useStateValue } from "./StateProvider";

function Login() {
    const [state, dispatch] = useStateValue(); // Hook; state is unused

    const signIn = () => {

        // Sign in Procedure
        authentication
            .signInWithPopup(provider)
            .then((result) => {    // if successful, ...
                
                // Push info into data layer with dispatch
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user,
                });

                // console.log(result); // You do not want to show the result into console as it leaks data
                console.log("Successful login");
            })
            .catch((error) => {    // if an error occur, alert with error message
                alert(error.message);
            })
    };

    return (
        <div className="login">
            <div className="login_logo">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.png"
                    alt=""
                />
                <img
                    src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg"
                    alt=""
                />
            </div>

            <Button type="submit" onClick={signIn} >Sign In</Button>

        </div>
    );
}

export default Login;
