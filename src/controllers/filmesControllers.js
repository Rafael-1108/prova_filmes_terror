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

const getFilmesByDecada = (req, res) => {
  const decada = parseInt(req.params.decada);
  const inicio = decada * 10 + 1900;
  const fim = inicio + 9;     

  const filtrados = filmes.filter(f =>
    f.anoLancamento >= inicio && f.anoLancamento <= fim
  );

  if (!filtrados) {
    return res.status(400).json({
        succes: false,
        message: `O filme com a década ${decada} não existe.`
    });
}

  res.status(200).json ({
    success: true,
    message: filtrados
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

const createFilme = (req, res) => {
    const { titulo, diretor, subgenero, anoLancamento, classificacao, duracao, franquia, sequencia } = req.body;

    if (classificacao < 16) {
        return res.status(400).json({
            success: false,
            message: "A classificação do filme deve ser pelo menos 16 anos"
        });
    }

    if (duracao < 60) {
        return res.status(400).json({
            success: false,
            message: "A duração do filme deve ser pelo menos 60 minutos"
        });
    }

    if (!titulo || !diretor || !subgenero || !anoLancamento || !franquia || !sequencia) {
        return res.status(400).json({
            success: false,
            message: "Título, diretor, subgenero, anoLancamento, franquia e sequencia são obrigatórios para a criação de um filme."
        });
    }

    const novoFilme = {
        id: filmes.length +1,
        titulo,
        diretor,
        subgenero,
        anoLancamento: parseInt (anoLancamento),
        classificacao: parseInt (classificacao),
        duracao: parseInt (duracao),
        franquia,
        sequencia: parseInt (sequencia)
    }

    filmes.push(novoFilme);

    res.status(201).json({
        success: true,
        message: "Novo filme criado com sucesso",
        filme: novoFilme
    });
}

const deleteFilme = (req,res) => {
    const id = parseInt(req.params.id);

    if(isNaN(id)){
        return res.status(400).json({
            success: false,
            message: "O id deve ser válido"
        })
    }

    const filmeRemover = filmes.find(f => f.id === id);

    if(!filmeRemover) {
        return res.status(404).json({
            sucess: false,
            message: `Filme com o id ${id} não existe`
        })
    }

    const filmesFiltrados = filmes.filter(f => f.id !== id);

    filmes.splice(0, filmes.length, ...filmesFiltrados);

    res.status(200).json({
        success: true,
        message: `O filme com id: ${id} foi removido com sucesso`
    });
}

const updateFilme = (req, res) => {
    const id = parseInt(req.params.id);
    const { titulo, diretor, subgenero, anoLancamento, classificacao, duracao, franquia, sequencia } = req.body;
    const idParaEditar = id;

    if (isNaN(idParaEditar)) {
        return res.status(400).json({
            success: false,
            message: "O id deve ser um número válido"
        }); 
    }

    const filmeExiste = filmes.find(f => f.id === idParaEditar);

    if (!filmeExiste) {
        return res.status(404).json({
            success: false,
            message: `O filme com o id: ${id} não foi encontrado`
        });
    }

    const filmesAtualizados = filmes.map(f => f.id === idParaEditar ? {
        ...titulo,
        ...(nome && {nome}),
        ...(ano && {ano} ),
        ...(cor && {cor}),
    }
)
}
export { getAllFilmes, getFilmeById, getFilmeBySubgenero, getFilmeByDiretor, getFilmeByFranquia, getFilmesByDecada, createFilme, deleteFilme };