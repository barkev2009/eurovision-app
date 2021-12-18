import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../images/logo.png';
import '../common/styles/common.css'
import './components/styles/MainPage.css'

const MainPage = () => {
    return (
        <div className="select-container">
            <img src={logo} alt='euro_logo'/>
            <div className='header'></div>
            <div className='route-btns'>
                <Link to='/entries'>
                    <button className='btn-link'>
                        Search entries by years
                    </button>
                </Link>
                <Link to='/country-entries'>
                    <button className='btn-link'>
                        Search entries by countries
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default MainPage
