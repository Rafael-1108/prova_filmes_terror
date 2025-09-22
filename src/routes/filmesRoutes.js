import express from "express";
import { getAllFilmes, getFilmeByDiretor, getFilmeById, getFilmeBySubgenero, getFilmeByFranquia, getFilmesByDecada } from "../controllers/filmesControllers.js";

const router = express.Router();

router.get("/", getAllFilmes);
router.get("/:id", getFilmeById);
router.get("/subgenero/:subgenero", getFilmeBySubgenero);
router.get("/diretor/:diretor", getFilmeByDiretor);
router.get("/franquia/:franquia", getFilmeByFranquia);
router.get("/decada/:decada", getFilmesByDecada);

export default router;