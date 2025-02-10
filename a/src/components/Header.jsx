import React, { useState } from 'react';
import './Header.css';
import Boas_vindas from './Boas_vindas';

function Header() {

  const [usuario, set_usuario] = useState({nome: ``, email: ``, senha: ``});
  const [usuario_logado, set_usuario_logado] = useState(``);

  function login(){
     
      set_usuario({...usuario, nome: `nomee`});
  };

  return (
    <div className='header_container'>

        <p>aasd</p>

        {usuario.nome ? <Boas_vindas nome={usuario.nome} email={usuario.email} senha={usuario.senha}/> : <button onClick={login}>Log-in</button>}
    
    </div>
  )
}

export default Header
