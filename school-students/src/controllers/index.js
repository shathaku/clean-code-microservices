const studentUsecase = require('../use-cases');
const {makeGetStudent, makeGetAllStudents} = require('./get-student');
const {makePostStudent} = require('./post-student');

const getStudent = makeGetStudent(studentUsecase);
const getAllStudents = makeGetAllStudents(studentUsecase);
const postStudent = makePostStudent(studentUsecase);

module.exports = {
  getStudent,
  getAllStudents,
  postStudent
}