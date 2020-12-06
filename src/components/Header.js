import React, {useState, useEffect} from 'react'
import './Header.css'
import {Select, MenuItem, FormControl} from '@material-ui/core'

function Header({getCountryInfo, setTableData, setMapCenter, setMapZoom}) {
    const [country, setCountry] = useState('worldwide')
    const [countries, setCountries] = useState([])
    

    
    
    useEffect(()=> {
        fetch("https://disease.sh/v3/covid-19/all")
        .then(response => response.json())
        .then(data=> getCountryInfo(data))
    }, [getCountryInfo])

    useEffect(()=> {
        
        const getCountriesData = ()=> {

             fetch("https://disease.sh/v3/covid-19/countries")
                            .then(response => response.json())
                            .then(data => {
                                const countries = data.map(country => (
                                    {name: country.country, value: country.countryInfo.iso2}
                                )
                                    )
                                    setCountries(countries)
                                    setTableData(data)
                                    
                            })
        }
        getCountriesData()
      
       
       

    }, [setCountries])
    const handleCountryChange = e => {
        const countryCode = e.target.value
        setCountry(countryCode)
        
        const url = countryCode === 'worldwide'? "https://disease.sh/v3/covid-19/all" : `https://disease.sh/v3/covid-19/countries/${countryCode}`
        function navigate(center, zoom) {
            setMapCenter(center)
            setMapZoom(zoom)
        }
        fetch(url)
        .then(response => response.json())
        .then(data=>{ 
            getCountryInfo(data)
            countryCode === 'worldwide'? navigate({ lat: 34.80746, lng: -40.4796 }, 3): navigate([data.countryInfo.lat, data.countryInfo.long], 4)
            setMapZoom(4)
        })

    }
  
    console.log("hello", countries)
    return (
        <div className="header">
            <h1>Covid-19 tracker</h1>

            <FormControl className="header__dropdown">
                <Select style={{backgroundColor: "white", marginTop: "1rem"}} variant="outlined" value={country} onChange={handleCountryChange}>
                    <MenuItem value="worldwide">worldwide</MenuItem>
    {countries.map(country => (<MenuItem value={country.value}>{country.name}</MenuItem>))}
                </Select>
            </FormControl>

        </div>
    )
}

export default Header
