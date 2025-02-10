import React, { useState } from 'react';
import './Section_um.css';
import Avisos from './Avisos';
import Demo from './Demo';

function Section_um() {
  
  const [exibir_avisos, set_exibir_avisos] = useState(false);

  return (
    <div className='section_um_container'>
        <p>Sou o section um</p>
        <button onClick={() => set_exibir_avisos(!exibir_avisos)}>Exibir aviso</button>
        { exibir_avisos && <Avisos/> }

        <Demo/>
    </div>
  )
}

export default Section_um
