const db = require('../db/memory')
//const db = require('../db/mongodb')
let { studentTransaction } = require('./memory')
//let { studentTransaction } = require('./mongodb') // switch out db as required
// = require('./mongodb')
// = require('./pg/index')

const transaction = studentTransaction(db);

const findStudent = transaction.findById;
const findAllStudents = transaction.findAll;
const addStudents = transaction.insert;
const updateStudent = transaction.update;
const removeStudent = transaction.remove;

const studentsDb = {
  findStudent,
  findAllStudents,
  addStudents,
  updateStudent,
  removeStudent
}

module.exports = studentsDb