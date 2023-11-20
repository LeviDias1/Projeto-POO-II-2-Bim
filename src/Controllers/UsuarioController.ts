// controllers/usuarioController.ts
import { Request, Response } from 'express';
import UsuarioService from '../Services/UsuarioService';

const UsuarioController = {
  getAllUsuarios: async (_req: Request, res: Response) => {
    const usuarios = await UsuarioService.getAllUsuarios();
    res.json(usuarios);
  },

  getUsuarioById: async (req: Request, res: Response) => {
    const usuarioId = parseInt(req.params.id, 10);
    const usuario = await UsuarioService.getUsuarioById(usuarioId);
    res.json(usuario);
  },

  createUsuario: async (req: Request, res: Response) => {
    const { nome, email } = req.body;
    const usuario = await UsuarioService.createUsuario({ nome, email });
    res.json(usuario);
  },
 
};

export default UsuarioController;
