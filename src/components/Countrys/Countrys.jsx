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
                    cName.map(n => <span style={{marginRight: "10px", fontSize:"20px"}}>{n},</span>)
                }
            </div>
            <div className="countries-container">
                 { countrys?.map(country => <Country
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