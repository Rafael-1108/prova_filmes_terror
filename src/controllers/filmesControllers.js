import dados from "../models/dados.js";

const { filmes } = dados;
let resultado = filmes;

const getAllfilmes = (req, res) => {
    res.status(200).json({
    total: resultado.length,
    filmes: resultado
    });
}

const getFilmeById = (req, res) => {
    const id = parseInt(req.params.id);

    const filme = filmes.find(f => f.id === parseInt (id));

    if(!filme){
        return res.status(404).json({
            success: false,
            message: `O filme com id: ${id} não existe`
        });
    }

    res.status(200).json({
    total: 1,
    filme: filme
    });
}



export default { getAllfilmes, getFilmeById };