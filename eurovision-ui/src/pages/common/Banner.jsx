import React, { useCallback } from 'react'
import { useNavigate } from 'react-router-dom';
import logo from '../../images/logo.png';
import '../../styles/style.css'


const Banner = () => {

    const navigate = useNavigate()
    const navToMain = useCallback(
      () => navigate('/eurovision-app', {replace: true}), []
    )

    return (
        <div className='select-container'>
            <img src={logo} alt='euro_logo' className='logo' onClick={navToMain}/>
            <div className='header'></div>
        </div>
    )
}

export default Banner
