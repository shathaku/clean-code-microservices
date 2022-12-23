const express = require('express')
const router = express.Router()

const {welcomeStudent, getStudent, getAllStudents, postStudent} = require('../controllers')
//const teachers = require('./teachers')

router
  .get('/students/welcome', welcomeStudent)
  .get('/students', getAllStudents)
  .get('/students/:id', getStudent)
  .post('/students', postStudent)

/* router
  .get('/teachers', teachers.index)
  .get('/teachers/:id', teachers.show)
  .post('/teachers', teachers.create)
 */
module.exports = router;
