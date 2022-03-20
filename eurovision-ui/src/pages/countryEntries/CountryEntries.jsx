import axios from 'axios';
import React, { useState, useEffect } from 'react';
import stepsMap from '../../mappingFiles/mapContestSteps';
import Banner from '../common/Banner';
import '../../styles/style.css'
import CountryData from './components/CountryData';
import ScrollCountries from './components/ScrollCountries';
import { useDispatch, useSelector } from 'react-redux';
import { setInitialEntries } from '../../redux/actions';

const CountryEntries = () => {

    const [countries, setCountries] = useState([])
    const [countryData, setCountryData] = useState([])
    const [allEntries, setAllEntries] = useState([])
    const [selectedCountry, setSelectedCountry] = useState('')

    const dispatch = useDispatch()
    const entries = useSelector(state => state.entries.entries)




    useEffect(() => {
        axios.get(
            'http://127.0.0.1:8000/api/countries/'
        ).then(
            response => {
                setCountries(response.data)
            }
        )
    }, [])


    useEffect(
        () => {
            dispatch(setInitialEntries())
            if (!!localStorage.selectedCountry) {
                setSelectedCountry(localStorage.selectedCountry)
            }
            const countryData = entries.filter(entry => entry.song.artist.country.name === selectedCountry)
                .sort((a, b) => (a.year.year - b.year.year) || (stepsMap[a.contest_step.name] - stepsMap[b.contest_step.name]));
            setCountryData(countryData);

        }, [selectedCountry, entries]
    )

    const selectCountry = (e) => {
        localStorage.setItem('selectedCountry', e);
        setSelectedCountry(e);
    }

    return (
        <header className='country-block'>
            <Banner />
            <div className='main-container'>
                <ScrollCountries countries={countries} onClick={selectCountry} selectedCountry={selectedCountry} />
                <CountryData data={countryData} />
            </div>
        </header>
    )
}

export default CountryEntries
