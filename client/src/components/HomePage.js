import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import GoogleLogin from "react-google-login"
import '../styling/home.css'
import { setSignedIn, setUserData } from '../features/userSlice'



export const HomePage = () => {

    const isSignedIn = useSelector(state=>state.user.isSignedIn)
    const dispatch = useDispatch()
    
    const login = (response)=>{
        console.log(response)
        dispatch(setSignedIn(true))
        dispatch(setUserData(response.profileObj))
    }


    return (
        <div className="home__page" style={{display: isSignedIn ? "none" : ""}}>
            <div className="'login__message">
                <h1>A Readers Favourit Place!</h1>
                <p> We Provide high quiality online reaources</p>
               {
                 !isSignedIn ?  <GoogleLogin
                 clientId = "52294641160-r9lq2d7qcvnjhrrr8mumnn4porsg969o.apps.googleusercontent.com"
                 render={(renderProps) => (
                   <button
                     onClick={renderProps.onClick}
                     disabled={renderProps.disabled}
                     className="login__button"
                   >
                     Login with Google
                   </button>
                 )}
                 onSuccess={login}
                 onFailure={login}
                 isSignedIn={true}
                 cookiePolicy={"single_host_origin"}
               /> : ""
               }
            </div>
        </div>
    )
}
