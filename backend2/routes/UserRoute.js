import express from "express";
import {
    getUsers,
    getUsersById,
    saveUsers
} from "../controllers/UserController.js";

const router = express.Router();

router.get('/users', getUsers);
router.get('/users/:id', getUsersById);
router.post('/users', saveUsers);

export default router;