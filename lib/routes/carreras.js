import express from 'express';

import {
  getCarrera,
  index,
  getTodasLasCarreras,
  show,
  addCarrera,
  updateCarrera,
  deleteCarrera,
  getCarrerasConDirectivos,
} from '../controllers/carrera_controller';
import { withErrorHandling } from './utils';

const router = express.Router();
router.get('/todas', withErrorHandling(getTodasLasCarreras));
router.get('/todasConDirectivos', withErrorHandling(getCarrerasConDirectivos));
router.get('/', withErrorHandling(index));
router.get('/:id', withErrorHandling(getCarrera));

// SE elimina o no ??
router.get('/:id', withErrorHandling(show));

router.post('/', withErrorHandling(addCarrera));

router.put('/', withErrorHandling(updateCarrera));

router.delete('/:id', withErrorHandling(deleteCarrera));

export default router;
