const {Router} = require('express');
const {check} = require('express-validator');
const {validateFields} = require('../middlewares/validateFields');
const {getImages} = require('../controllers/img');



const  router = Router();

//Root
router.get('/', 
    [   //Middlewares
        check('topic', 'Topic cannot be empty').not().isEmpty(),
        validateFields
    ], getImages
);

module.exports = router;