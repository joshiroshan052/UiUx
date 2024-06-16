import React from 'react'
import phone from '../assets/gamers.jpg'
import { LoginCard } from '../components/login/LoginCard'
import backgroundImage from '../assets/download.jpg'

export function Login() {
    return (
        <div className='home' style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className="lg-sg">
                <div className="login-left">
                    <div className="phone">
                        <img src={phone} className="phone-img" alt="Gamer" />
                    </div>
                </div>
                <div className="right-login">
                    <LoginCard />
                </div>
            </div>
        </div>
    )
}
