const {Router} = require('express');
const controller =require('./controller')

const router = Router();


router.get('/', controller.getStudents);
router.get("/:id",controller.getsStudentById)
router.post('/',controller.addStudent);
router.delete("/:id",controller,removeStudent);



module.exports =router;