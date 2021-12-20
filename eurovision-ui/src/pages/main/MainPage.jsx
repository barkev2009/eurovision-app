import React from 'react'
import { Link } from 'react-router-dom'
import Banner from '../common/Banner';
import '../common/styles/common.css'
import './components/styles/MainPage.css'

const MainPage = () => {
    return (
        <header className="App-header">
            <Banner />
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
        </header>
    )
}

export default MainPage
