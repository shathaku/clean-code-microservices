const { getStudentsData}  = require('./students-connector');

const getStudentById = getStudentsData();

module.exports = {
    getStudentById
}