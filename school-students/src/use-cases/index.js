const { makeAddNewStudents, makeFindByStudent, makeFindAllStudents } = require('./student-transactions');
const { makeStudent } = require('../models/students')
let studentDbAccess = require('../data-access') // DB

const findAllStudents = makeFindAllStudents(studentDbAccess);
const findByStudent = makeFindByStudent(studentDbAccess);
const addNewStudents = makeAddNewStudents(studentDbAccess, makeStudent);

module.exports = {
    findAllStudents,
    findByStudent,
    addNewStudents
}