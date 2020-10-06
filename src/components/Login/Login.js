import React from 'react';
import { loginUrl } from '../../utils/spotify';
import './Login.css';

function Login() {
    return (
        <div className='login'>
            <img src='https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fimages.clipartpanda.com%2Fcolorful-musical-notes-png-LiKrGdB6T.png&f=1&nofb=1' alt='logo'/>
            <a href={loginUrl}>Login With Spotify</a>
        </div>
    )
}

export default Login;
