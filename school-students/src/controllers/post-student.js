const makePostStudent = function (studentUsecase) {
  return function postStudent(req, res, next) {
    studentUsecase.addNewStudents(req.body)
    .then(data => {
      console.log("new student added!!")
      res.send(data)
    })
    .catch(next)
  }
}

module.exports = {
  makePostStudent
}