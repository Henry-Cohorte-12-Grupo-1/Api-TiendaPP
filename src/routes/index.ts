//imports
import {Router} from 'express'
import search from './search'

const router = Router()

//routers

router.use('/search', search);


//Get a Home de prueba
router.get('/',(req,res)=>{
    res.send('Pagina Principal')
})


//exports
export default router;