import { useState } from 'react';
import './App.css';
import axios from 'axios';
import { useEffect } from 'react';

function App() {

  const [usuarios, set_usuarios] = useState(null); 
  const [formulario, set_formulario] = useState({ id: 1, nome: ``, email: ``, senha: ``});

  useEffect(() => {

    fetch_usuarios();

  }, []);

  const fetch_usuarios = async () => {

    try{

      const resposta = await axios.get(`/usuarios`);
      set_usuarios(resposta.data);
      console.log(usuarios);

    } catch(erro){

      console.error(erro);
    };
  };

  const lidar_com_envio = e => {

    e.preventDefault();

    axios.post(`/usuarios`, formulario);
  };

  return (
    <>
    <div className="container_formulario">

      <form onSubmit={lidar_com_envio}>

        <label>Nome:</label>
        <input type="text" value={formulario.nome} onChange={e => set_formulario({...formulario, nome: e.target.value})}/>

        <label>Email:</label>
        <input type="text" value={formulario.email} onChange={e => set_formulario({...formulario, email: e.target.value})}/>

        <label>Senha:</label>
        <input type="text" value={formulario.senha} onChange={e => set_formulario({...formulario, senha: e.target.value})}/>

        <button type='submit'>Enviar</button>

      </form>

    </div>
    </>
  )
}

export default App
