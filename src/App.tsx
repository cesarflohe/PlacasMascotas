import './App.css';
import React, { useEffect, useState } from 'react';
import { landingPageDTO} from './mascotas/mascota.model';
import ListadoMascotas from './mascotas/ListadoMascotas';
import { ReactElement } from "react";


function App() {

  const [mascotas, setMascotas] = useState<landingPageDTO>({})

  useEffect (() => {
    const timerId = setTimeout(() => {
      setMascotas ({Perrito: [
        { id:1, nombre:'Camila',
          foto:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTplgDkaJ9Mg5TdwNpKFFc26YoZ3Krt938EaezoF2sBZloQMYGx1QNIEbOyNJlgEyMexic&usqp=CAU'
        },
        { id:2, nombre:'Keyla',
          foto:'https://images.unsplash.com/photo-1617895153857-82fe79adfcd4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80'
        }
        ],
                    Gatito: [
        {id:3, nombre:'Bandido',
          foto:'https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Collage_of_Six_Cats-02.jpg/1200px-Collage_of_Six_Cats-02.jpg'}
                    ]})
    }, 1000);

    return () => clearTimeout(timerId);
  })


  return (
    <>
    <div>
      <h3>Perritos</h3>
      <ListadoMascotas mascotas={mascotas.Perrito}/>

      <h3>Gatitos</h3>
      <ListadoMascotas mascotas={mascotas.Gatito}/>
    </div>
    </>
  );
}

export default App;
