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
                    <b>Name:</b> {character.name}
                </li>
                <li>
                    <img src={character.image} alt="" />
                </li>
                <li>
                    <b>Status:</b> {character.status}
                </li>
                <li>
                    <b>Origin Name:</b>  {character.origin?.name}
                </li>
                <li>
                    <b>Episodes:</b> {character.episode?.length}
                </li>
            </ul>
        </div>


    );
};

export default ResidentInfo;