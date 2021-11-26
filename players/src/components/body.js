import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { postPlayer, getPlayers } from '../actions/playerAction';
import { Form, Field } from 'react-final-form'
import Button from './button';
import Modal from './modal';

const Body = () => {
    
    // const players = useSelector(s => s.player);
    // const dispatch = useDispatch()
    // useEffect(()=> {
    //     dispatch(getPlayers);
    // }, []);

    const [players, setPlayers] = useState([]);
    const [openModal, setOpenModal] = useState(false);

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
            <table className='players-table'>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Surname</th>
                        <th>Quality</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {players.map((p) => (
                        <tr key={p._id}>
                            <td>{p.name}</td>
                            <td>{p.surname}</td>
                            <td>{p.quality}</td>
                            <td><Button text={'Edit'} onClick={() => {setOpenModal(true)}} className={'edit-button'}></Button></td>
                            <td><Button text={'X'} onClick={() => {console.log('borrar usuario')}} className={'delete-button'}></Button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Button text={'Add Player'} onClick={() => {setOpenModal(true)}} className={'add-button'}></Button>
            {openModal && <Modal closeModal={setOpenModal}></Modal>}
        </div>
    )
}

export default Body