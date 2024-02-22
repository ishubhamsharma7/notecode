import express from "express";
import userRoutes from './user'
import editorRouter from './editor'

const router = express.Router();


router.use("/user", userRoutes);
router.use('/editor',editorRouter)

export default router;
