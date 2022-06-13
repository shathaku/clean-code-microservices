const buildMakeStudent = require('./student');
const studentSchema = require('./student-schema');
const validator = require('../validator');

const studentValidator = validator(studentSchema);

let makeStudent = buildMakeStudent(studentValidator)

module.exports =  {makeStudent};