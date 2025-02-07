const express = require(`express`);
const cors = require(`cors`);
const app = express();

app.use(cors());
app.use(express.json());

let usuarios = [];

app.get(`/usuarios`, (req, res) => {

    res.json(usuarios);
});

app.get(`/usuarios/:id`, (req, res) => {

    const { id } = req.params;
    const usuario = usuarios.find( usuario => usuario.id === id);

    if(usuario){

        res.json(usuario);

    } else {

        res.status(404).json({message: `Usuário não encontrado!`});
    };
});

app.post(`/usuarios`, (req, res) => {

    const { id, nome, email, senha } = req.body;
    const usuario = { id, nome, email, senha };

    usuarios.push(usuario);

    res.json(usuarios);
});

app.put(`/usuarios/:id`, (req, res) => {

    const { id } = req.params;
    const { nome, email, senha} = req.body;

    const index_usuario = usuarios.findIndex( usuario => usuario.id === id);

    const usuario = {

        ...usuarios[index_usuario],
        nome: nome || usuarios[index_usuario].nome,
        email: email || usuarios[index_usuario].email,
        senha: senha || usuarios[index_usuario].senha,
    };

    usuarios[index_usuario] = usuario;
});

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});