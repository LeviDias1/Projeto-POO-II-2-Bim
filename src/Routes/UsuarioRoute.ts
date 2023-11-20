// routes/usuarioRoutes.ts
import express from 'express';
import UsuarioController from '../Controllers/UsuarioController';

const router = express.Router();

router.get('/', UsuarioController.getAllUsuarios);
router.get('/:id', UsuarioController.getUsuarioById);
router.post('/', UsuarioController.createUsuario);


export default router;
