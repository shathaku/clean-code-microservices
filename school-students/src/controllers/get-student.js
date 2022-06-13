const makeGetStudent = function (studentUsecase) {
  return function getStudent(req, res) {
    studentUsecase.findByStudent(req.params.id)
    .then(data => {
      console.log("got player data")
      res.send(data)
    })
    .catch(err => console.log(err))
  }
}

const makeGetAllStudents = function (studentUsecase) {
  return function getAllStudents(req, res) {
    studentUsecase.findAllStudents()
    .then(data => {
      console.log("got player data")
      res.send(data)
    })
    .catch(err => console.log(err))
  }
}

module.exports = {
  makeGetStudent,
  makeGetAllStudents
}