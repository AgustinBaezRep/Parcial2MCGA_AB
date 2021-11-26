import React, { useState, useEffect } from 'react';

const Body = () => {

    const [players, setPlayers] = useState([]);
    useEffect(() => {
        fetchPlayers();
    }, [])
    
    const fetchPlayers = async () => {
        const data = await fetch('https://player-manager.herokuapp.com/')
        const players = await data.json()
        setPlayers(players.response)
    };

    return (
        <div className='players-layout'>
            {players.map((p) => (
                <div className='player-div' key={p._id}>{`player: ${p.name}`}</div>
            ))}
        </div>
    )
}

export default Body
