import express from "express";
import userRoutes from './user.routes'
import editorRouter from './editor.routes'

const router = express.Router();


router.use("/user", userRoutes);
router.use('/editor',editorRouter)

export default router;
