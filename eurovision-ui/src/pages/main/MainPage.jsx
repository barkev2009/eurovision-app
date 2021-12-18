import React from 'react'
import { Link } from 'react-router-dom'

const MainPage = () => {
    return (
        <div>
            <Link to='/entries'>
                <button className='entries-link'>
                    Go to entries
                </button>
            </Link>
        </div>
    )
}

export default MainPage
