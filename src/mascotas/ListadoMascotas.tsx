import MascotaIndividual from "./MascotaIndividual";
import {mascota} from './mascota.model'
import css from './ListadoMascotas.module.css'
import React from "react";

export default function ListadoMascotas(props: listadoMascotasProps){

    if (!props.mascotas){
        return 'Cargando...';
    } else if (props.mascotas.length === 0){
        return <> No hay elementos para mostrar</>
    } else {
        return (
            <div className={css.div}>
                {props.mascotas?.map(mascota =>
                    <MascotaIndividual mascota={mascota}
                                        key={mascota.id}
                />)}
            </div>
        )
    }

}

interface listadoMascotasProps {
    mascotas?: mascota[]
}