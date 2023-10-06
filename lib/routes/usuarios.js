import express from 'express';

import {
  getTodosLosUsuarios,
  getUsuario,
  index,
  show,
  addUsuario,
  updateUsuario,
  deleteUsuario,
  getUsuarioCompleto,
  getDirectivos,
  updateEstadoUsuarioByDni,
  getEstadoByDni,
} from '../controllers/usuario_controller';
import { withErrorHandling } from './utils';

const router = express.Router();
router.get('/todos', withErrorHandling(getTodosLosUsuarios));
router.get('/', withErrorHandling(index));
router.get('/:id', withErrorHandling(getUsuario));
router.get('/completo/:id', withErrorHandling(getUsuarioCompleto));
router.get('/:id', withErrorHandling(show));
router.get('/directivos/todos', withErrorHandling(getDirectivos));
router.get('/getEstadoByDni/:dni', withErrorHandling(getEstadoByDni));

router.post('/', withErrorHandling(addUsuario));

router.put('/:id', withErrorHandling(updateUsuario));
router.put(
  '/updateEstadoByDni/:dni',
  withErrorHandling(updateEstadoUsuarioByDni)
);

router.delete('/:id', withErrorHandling(deleteUsuario));

export default router;
