import express from 'express'
import { login, signUp } from '../controllers/AuthController.js'

const router = express.Router()

router.post('/', signUp)
router.post('/:id', login)

export default router