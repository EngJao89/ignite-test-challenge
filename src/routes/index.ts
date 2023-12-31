import { Router } from 'express';

import { authenticationRouter } from './authentication.routes';
import { statementRouter } from './statements.routes';
import { transfersRoutes } from './transfers.routes';
import { userProfileRouter } from './userProfile.routes';
import { usersRouter } from './users.routes';

const router = Router();

router.use('/', authenticationRouter);
router.use('/users', usersRouter);
router.use('/profile', userProfileRouter);

router.use('/statements', statementRouter);
router.use('/transfers', transfersRoutes);

export { router };
