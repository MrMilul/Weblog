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

    const login = (response)=>{
        console.log(response)
    }
    return (
        <div className="home__page" style={style}>
            <div className="'login__message">
                <h1>A Readers Favourit Place!</h1>
                <p> We Provide high quiality online reaources</p>
                <GoogleLogin
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
          />
            </div>
        </div>
    )
}
