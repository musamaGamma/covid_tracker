import React from 'react'
import InfoBox from './InfoBox'
import "./Stats.css"

function Stats({countryInfo , setCaseType, caseType}) {
    console.log(countryInfo)
    return (
        <div className="stats">
            <InfoBox isRed={true} active={caseType === "cases"} title="Coronavirus Cases" total={countryInfo.cases} cases={countryInfo.todayCases} onClick={()=> setCaseType('cases')} />
            <InfoBox isGreen={true} active={caseType === "recovered"} title="Recovered" total={countryInfo.recovered} cases={countryInfo.todayRecovered} onClick={()=> setCaseType('recovered')}/>
            <InfoBox isRed={true} active={caseType === "deaths"} title="Deaths" total={countryInfo.deaths} cases={countryInfo.todayDeaths} onClick={()=> setCaseType('deaths')}/>
            
        </div>
    )
}

export default Stats
