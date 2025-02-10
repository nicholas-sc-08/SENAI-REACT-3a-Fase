const express = require(`express`);
const app = express();

let usuarios = [];

app.put(`/usuarios/:id`, async (req, res) => {

    const { id } = req.params;
    const { nome, email, cpf, senha } = req.body;

    try {

    const index_usuario = usuarios.findIndex( usuario => usuario.id === id );

        const usuario = {

            ...usuarios[index_usuario],
            nome: nome || usuarios[index_usuario].nome,
            email: email || usuarios[index_usuario].email,
            cpf: cpf || usuarios[index_usuario].cpf,
            senha: senha || usuarios[index_usuario].senha
        };

        res.status(201).json({message: `Atualizado com sucesso!`});

    } catch(erro) {

        console.error(erro);
    };
});

app.get(`/usuarios`, (req, res) => {

    res.json(usuarios);
});

app.post(`/usuarios`, (req, res) => {

    const { nome, email, cpf, senha } = req.body;
    const usuario = { nome, email, cpf, senha};
    
    usuarios.push(usuario);
});