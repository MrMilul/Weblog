import React from 'react'
import GoogleLogin from "react-google-login"

export const HomePage = () => {
    const style = {
        backgroundColor: "red", 
        height: "100vh",
        display: "flex",
        justifyContent: "center", 
        alignItems:"center"

    }
    return (
        <div className="home__page" style={style}>
            <div className="'login__message">
                <h1>A Readers Favourit Place!</h1>
                <p> We Provide high quiality online reaources</p>
                <GoogleLogin></GoogleLogin>
            </div>
        </div>
    )
}
