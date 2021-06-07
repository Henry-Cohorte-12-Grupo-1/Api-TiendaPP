import {Router} from 'express'
import home from './home'
// const home = require('./home')
const router = Router()

router.use('/index',(req,res)=>{
    res.send('Index')
})

router.use('/home',home)

export default router;