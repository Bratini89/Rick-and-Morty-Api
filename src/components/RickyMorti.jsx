import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Footer from './Footer';
import Residentinfo from './Residentinfo';

const RickyMorti = () => {

    const [ricky, setRicky] = useState({})
    const [typeId, setTypeId] = useState("")

    useEffect(() => {
        const randomCharacter = Math.floor(Math.random() * 126) + 1;
        axios.get(`https://rickandmortyapi.com/api/location/${randomCharacter}`)
            .then(res => setRicky(res.data))

    }, [])

    console.log(ricky)
    axios.get

    const searchType = () => {
        axios.get(`https://rickandmortyapi.com/api/location/${typeId}`)
            .then(res => setRicky(res.data))
    }

    return (
        <div>
            <h1 className='title'>Rick and Morty</h1>
            <div className='background'>

            </div>
            <div className='here'>
                <h2>{ricky.name}</h2>
                <div className='infoo'>
                    <h3><b>Type:</b> {ricky.type}</h3>
                    <h3><b>Dimension:</b> {ricky.dimension}</h3>
                    <h3><b>Residents:</b> {ricky.residents?.length}</h3>
                </div>
            </div>
            <div className='inputSearch'>
                <input type="text" value={typeId} onChange={e => setTypeId(e.target.value)} />
                <button onClick={searchType}><i class="fa-solid fa-magnifying-glass"></i>{" "}Search</button>
                <ul>
                    {ricky.residents?.map(ricky => (
                        <Residentinfo
                            ricky={ricky} key={ricky} />
                    ))}
                </ul>
            </div>
            <Footer />
        </div>
    );
};

export default RickyMorti;