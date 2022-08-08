import express from "express";
import {
    getAkun,
    getAkunById,
    saveAkun
} from "../controllers/AkunController.js";

const router = express.Router();

router.get('/akun', getAkun);
router.get('/akun/:id', getAkunById);
router.post('/akun', saveAkun);

export default router;