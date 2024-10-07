import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import "./Countrys.css"

const Countrys = () => {

    const [countrys, setCountrys] = useState([])
    const [cName, setCName] = useState([])
    const [cFlag, setCFlag] = useState([]);

    useEffect(()=>{ 
        fetch(`https://restcountries.com/v3.1/all`)
        .then(res=>res.json())
        .then(data => setCountrys(data))
    }, [])


    return (
        <div>
            <div>
                {
                    cName.map(CountryNm => <span style={{marginRight: "10px", fontWeight:'900px', fontSize:"25px"}}>{CountryNm},</span>)
                }
            </div>

            <div>
                {
                    cFlag.map(flags => <img style={{marginRight: "15px", height:"70px", width:'120px'}} src={flags}/>)
                }
            </div>

            <div className="countries-container">
                 { countrys?.map(country => <Country
                    setCFlag={setCFlag}
                    cFlag={cFlag}

                    setCName={setCName}
                    cName={cName}
                    key={country.cca3}
                    country={country}
                ></Country>)}
            </div>
        </div>
    );
};

export default Countrys;