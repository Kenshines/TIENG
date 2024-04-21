import express from 'express'
import { sayHello,sayHellofr } from '../controllers/HelloController.js'


const router = express.Router()

router.get('/', sayHello)
router.get('/fr', sayHellofr)

export default router