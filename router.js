import express from 'express'
import agents from './routes/AgentRoutes.js'
import hello from './routes/HelloRoutes.js'
import { login, signUp } from './controllers/AuthController.js'

const router = express.Router()

router.use('/', hello)
router.use('/agents', agents)
router.use('/signup', signUp)
router.use('/login', login)

export default router