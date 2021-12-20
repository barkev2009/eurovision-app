import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Banner from '../common/Banner';
import '../common/styles/common.css'
import CountryData from './components/CountryData';
import ScrollCountries from './components/ScrollCountries';
import './components/styles/CountryEntries.css'

const CountryEntries = () => {

    const [countries, setCountries] = useState([])
    const [countryData, setCountryData] = useState([])
    const [allEntries, setAllEntries] = useState([])
    const [selectedCountry, setSelectedCountry] = useState('')

    useEffect( () => {
        axios.get(
            'http://127.0.0.1:8000/api/countries/'
        ).then(
            response => {
                setCountries(response.data)
            }
        )
    }, [])

    useEffect( () => {
        axios.get(
            'http://127.0.0.1:8000/api/entries/'
        ).then(
            response => {
                setAllEntries(response.data)
            }
        )
    }, [allEntries])

    useEffect(
        () => {
            if (!!localStorage.selectedCountry) {
                setSelectedCountry(localStorage.selectedCountry)
            }
            const countryData = allEntries.filter(entry => entry.song.artist.country.name === selectedCountry).sort((a, b) => a.year.year - b.year.year);
            setCountryData(countryData);
                
        }, [selectedCountry, allEntries]
    )

    const selectCountry = (e) => {
        localStorage.setItem('selectedCountry', e);
        setSelectedCountry(e);
    }

    return (
        <header className='country-block'>
            <Banner />
            <div className='main-container'>
                <ScrollCountries countries={countries} onClick={selectCountry} selectedCountry={selectedCountry}/>
                <CountryData data={countryData}/>
            </div>
        </header>
    )
}

export default CountryEntries
