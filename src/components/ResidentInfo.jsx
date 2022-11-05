import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ResidentInfo = ({ ricky }) => {
    const [character, setCharacter] = useState({})

    useEffect(() => {
        axios.get(ricky).then(res => setCharacter(res.data))
    }, [])

    console.log(character)


    return (
        <div className='list'>
            <ul>
                <li>
                    <p><b>Name:</b> {character.name}</p>
                    <p><img src={character.image} alt="" /></p>
                    <p><b>Status:</b> {character.status}</p>
                    <p><b>Origin Name:</b>  {character.origin?.name}</p>
                    <p><b>Episodes:</b> {character.episode?.length}</p>
                </li>
            </ul>
        </div>


    );
};

export default ResidentInfo;