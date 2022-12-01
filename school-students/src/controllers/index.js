const studentUsecase = require('../use-cases');
const {makeGetStudent, makeGetAllStudents, makeWelcomeStudent} = require('./get-student');
const {makePostStudent} = require('./post-student');

const welcomeStudent = makeWelcomeStudent();
const getStudent = makeGetStudent(studentUsecase);
const getAllStudents = makeGetAllStudents(studentUsecase);
const postStudent = makePostStudent(studentUsecase);

module.exports = {
  welcomeStudent,
  getStudent,
  getAllStudents,
  postStudent
}