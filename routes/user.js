const express = require('express')
const { crearOne, eliminar, verTodos, editar } = require('../controllers/usersControllers')
const router = express.Router()
const storage = require('../middlaware/multer')
const User =  require('../models/user')


router.post('/user',  storage.single('file'), crearOne  );
router.delete('/user/:id', eliminar );
router.get('/user', verTodos);
router.put('/user/:id', editar)
//get de todo
/*router.get('/',  async (req, res)=>{
    try{
            const user = await User.find()
            res.json(user)
    }catch(err){
            res.send('Error' + err)
    }
})

//get por id
router.get('/:id',  async (req, res)=>{
    try{
            const user = await User.findById(req.params.id)
            res.json(user)
    }catch(err){
            res.send('Error' + err)
    }
})

//envio de datos
router.post('/', async(req, res)=>{
    const user = new User ({
        name: req.body.name,
        password: req.body.password
    })
    try{
        const u1 = await user.save()
        res.json(u1)
    }catch(err){
        res.send('Error sending data....')
    }
})

//actualizar datos

router.put('/:id', async(req,res)=>{
    try{
        const user = await User.findById(req.params.id)
        user.name =req.body.name,
        user.password= req.body.password
       
        const u1 = await user.save()
        res.json(u1)       
    }catch(err){
            res.send('Error update data..')
    }
})

//eliminar usuario
router.delete('/:id', async(req,res)=>{
    const _id = req.params.id
    try{
        const user = await User.findByIdAndDelete({_id})
        if (!user) {
            return res.status(400).json({
                msg:'Usuerio no existe',
                error
            })
        }
            res.status(200).json(user)       
    }catch(err){
        res.send('No de pudo borrar...')
    }
})
*/
module.exports = router