import express from 'express';
import {
    postReset,
} from '../controllers/reset_controller';
import { withErrorHandling } from './utils';

const router = express.Router();

router.post('/:dni', withErrorHandling(postReset));

export default router;