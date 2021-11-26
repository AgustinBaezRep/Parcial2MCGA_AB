import React, { useState, useEffect } from 'react';
import Button from './button'
import Input from './input'
import ModalStyle from '../styles/modal.css'

const modal = ({ closeModal }) => {

    return (
        <div className='modal-container'>
            <div className="modal-block">
                <label className="modal-label">Nombre:</label>
                <Input type={'text'} placeholder={'Ingrese su nombre'} className={'texto-modal'}></Input>
            </div>
            <div className="modal-block">
                <label className="modal-label">Apellido:</label>
                <Input type={'text'} placeholder={'Ingrese su apellido'} className={'texto-modal'}></Input>
            </div>
            <div className="modal-block">
                <label className="modal-label">Posicion:</label>
                <Input type={'text'} placeholder={'Ingrese su posicion'} className={'texto-modal'}></Input>
            </div>
            <Button text={'Enviar'} onClick={() => {console.log('enviar datos api')}} className={'enviar-datos-button'}></Button>
            <Button text={'Cancelar'} onClick={() => {closeModal(false)}} className={'close-modal-button'}></Button>
        </div>
    )
}

export default modal
