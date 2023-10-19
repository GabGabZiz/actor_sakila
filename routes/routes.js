import express from "express";
// ... tus otros imports
const router = express.Router();
// Importa las funciones del controlador de actor
import {
  showActors,
  showActorById,
  createActor,
  updateActor,
  deleteActor,
} from "../controllers/ActorController.js";

// ... tus otras rutas

// Rutas para actor
router.get("/actors", showActors);
router.get("/actors/:id", showActorById);
router.post("/actors", createActor);
router.put("/actors/:id", updateActor);
router.delete("/actors/:id", deleteActor);

// ... export default router

export default router;
