import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import { Avatar } from '@material-ui/core'
import { GoogleLogout } from 'react-google-login'
import { setInput, setSignedIn, setUserData } from '../features/userSlice'
import '../styling/navbar.css'





export const Navbar = () => {
    const [inputValue, setInputValue] = useState("tech")

    const isSignedIn = useSelector(state=>state.user.isSignedIn)
    const userData = useSelector(state=>state.user.userData)
    const dispatch = useDispatch()

    const logout = (response)=>{
        dispatch(setSignedIn(false))
        dispatch(setUserData(null))
    }

    const handleClick = ()=>{
        dispatch(setInput(inputValue))
    }
    return (
        <div className="navbar">
            <h1 className="navbar__header">
                <Link to="/">Home</Link>
            </h1>
            <Link to='/create'>Create Post</Link>
            {
                isSignedIn && (
                    <div className="blog__search">
                        <input 
                            className="search"
                            placeholder="search for a blog"
                            value={inputValue}
                            onChange={e=> setInputValue (e.target.value)}
                        />
                        <button className="submit" onClick={handleClick}>
                            Search
                        </button>
                    </div>
                )
            }

            {
                isSignedIn ? (
                    <div className="navbar__user__data">
                        <Avatar src={userData?.imageUrl} alt={userData?.givenName} />
                        <GoogleLogout
                            clientId = "52294641160-r9lq2d7qcvnjhrrr8mumnn4porsg969o.apps.googleusercontent.com"
                            render={(renderProps) => (
                            <button
                                onClick={renderProps.onClick}
                                disabled={renderProps.disabled}
                                className="logout__button"
                            >
                               Logout
                            </button>
                            )}
                           onLogoutSuccess={logout}
                        />
                    </div>
                   
                ) : <h1 className='notSignedIn'> user not availabe</h1>
            }
        </div>
    )
}
