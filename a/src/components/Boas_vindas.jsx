import React from 'react'

function Boas_vindas({nome, email, senha}) {
  return (
    <div className='container_boas_vindas'>
      
        <p>seja bem-vindo(a)! {nome}</p>
        {email}
        {senha}

        <button onClick={() => console.log({nome, email, senha})
        }>Log</button>

    </div>
  )
}

export default Boas_vindas
