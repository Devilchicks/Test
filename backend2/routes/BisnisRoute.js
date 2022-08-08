import express from "express";
import {
    getBisnis,
    getBisnisById,
    saveBisnis
} from "../controllers/BisnisController.js";

const router = express.Router();

router.get('/bisnis', getBisnis);
router.get('/bisnis/:id', getBisnisById);
router.post('/bisnis', saveBisnis);

export default router;