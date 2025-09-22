import express from "express";
import { getAllFilmes, getFilmeById, getFilmeBySubgenero } from "../controllers/filmesControllers.js";

const router = express.Router();

router.get("/", getAllFilmes);
router.get("/:id", getFilmeById);
router.get("/subgenero/:subgenero", getFilmeBySubgenero);

export default router;