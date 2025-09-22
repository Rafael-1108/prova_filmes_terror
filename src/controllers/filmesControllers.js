import dados from "../models/dados.js";

const { filmes } = dados;
let resultado = filmes;

const getAllFilmes = (req, res) => {
    res.status(200).json({
    total: resultado.length,
    filmes: resultado
    });
}

const getFilmeBySubgenero = (req, res) => {
    const subgenero = req.params.subgenero;
    const subgeneroEscolhido = filmes.filter(s => s.subgenero.toLowerCase() === subgenero.toLowerCase());

    if (!subgeneroEscolhido) {
        return res.status(400).json({
            succes: false,
            message: `O filme com o subgenero ${subgenero} não existe.`
        });
    }

    res.status(200).json ({
        success: true,
        message: subgeneroEscolhido
    });
}

const getFilmeByDiretor = (req, res) => {
    const diretor = req.params.diretor;
    const diretorEscolhido = filmes.filter(d => d.diretor.toLowerCase() === diretor.toLowerCase());

    if (!diretorEscolhido) {
        return res.status(400).json({
            succes: false,
            message: `O filme com o diretor ${diretor} não existe.`
        });
    }

    res.status(200).json ({
        success: true,
        message: diretorEscolhido
    });
}

const getFilmeByFranquia = (req, res) => {
    const franquia = req.params.franquia;
    const franquiaEscolhida = filmes.filter(f => f.franquia.toLowerCase() === franquia.toLowerCase());

    if (!franquiaEscolhida) {
        return res.status(400).json({
            succes: false,
            message: `O filme com a franquia ${franquia} não existe.`
        });
    }

    res.status(200).json ({
        success: true,
        message: franquiaEscolhida
    });
}

const getFilmeByDecada = (req, res) => {
    if ()
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

/*const createFilme = (req, res) => {
    const { titulo, diretor, subgenero, anoLancamento, classificacao, duracao, franquia, sequencia } = req.body;
}*/

export { getAllFilmes, getFilmeById, getFilmeBySubgenero, getFilmeByDiretor, getFilmeByFranquia };