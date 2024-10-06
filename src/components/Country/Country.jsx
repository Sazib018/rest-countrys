import React, { useState } from 'react';
import './Country.css';

const Country = ({ country, setCName, cName, cFlag, setCFlag }) => {
    const { name, flags } = country

    const [isVisit, setIsVisit] = useState(false)
    const [isAdd, setIsAdd] = useState(false)
    const [isAddFlag, setIsAddFlag] = useState(false);


    const handleAddName = () => {
        setCName([...cName, name.common])
        setIsAdd(true)
    }

    const handleAddFlag = () => {
        setCFlag([...cFlag, flags.png]);
        setIsAddFlag(true);
    };

    return (
        <div className='country-container'>
            <h2>Name: {name.common}</h2>

            <div className='img-container'>
            <img src={flags.png} alt={flags.alt} />
            </div>

            <button onClick={() => setIsVisit(!isVisit)}>{isVisit ? 'visited' : 'visit'}</button>
            {!isAdd ?
                <button onClick={() => handleAddName()} >Add name</button>:
                <button disabled>Add name</button>
            }

            {!isAddFlag ?
                <button onClick={() => handleAddFlag()}>Add Flag</button> :
                <button disabled>Add Flag</button>
            }
        </div>
    );
};

export default Country;