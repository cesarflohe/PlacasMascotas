import { mascota } from "./mascota.model";
import css from './MascotaIndividual.module.css'
import React from 'react';
import ReactDOM from 'react-dom';

export default function MascotaIndividual(props:mascotaIndividualProps){

    const construirLink = () => `/mascota/${props.mascota.id}`

    return (
        <div className={css.div}>
            <a href={construirLink()}>
                <img src={props.mascota.foto} alt="Foto"/>
            </a>
            <p>
                <a href={construirLink()}>{props.mascota.nombre}</a>
            </p>
        </div>
    )
}

interface mascotaIndividualProps{
    mascota:mascota;
}