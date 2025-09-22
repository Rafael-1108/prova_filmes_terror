import express from "express";
import { getAllFilmes, getFilmeById } from "../controllers/filmesControllers.js";

const router = express.Router();

router.get("/", getAllFilmes);
router.get("/:id", getFilmeById);

export default router;