const router = require('express').Router();
const models = require('../../models');
const categoriaController = require('../../controllers/categoriaController.js');
const bcrypt = require('bcryptjs');
const auth = require('../../middlewares/auth')


//.com/api/usuario/
// router.get('/', async(req, res) => {
//     const user = await models.user.findAll();
//     res.status(200).json(user);
// });


//.com/api/usuario/register
// router.post('/register', async(req, res) => {
//     req.body.password = bcrypt.hashSync(req.body.password, 10);
//     const user = await models.user.create(req.body);
//     res.status(200).json(user);
// });


//.com/api/usuario/listar
//.com/api/usuario/login
//.com/api/usuario/register
router.get('/list', categoriaController.list);
router.post('/add', auth.verificarAlmacenero, categoriaController.add);
router.put('/update', auth.verificarAlmacenero, categoriaController.update);
router.put('/activate', auth.verificarAlmacenero, categoriaController.activate);
router.put('/deactivate', auth.verificarAlmacenero, categoriaController.deactivate);
// router.put('/actualizar', MiController.actualizar)


module.exports = router;