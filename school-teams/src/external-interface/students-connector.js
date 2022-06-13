const axios = require('axios');
const config = require('../config')

function getStudentsData() {
    return function(id) {
        return axios.get(`${config.STUDENT_URL}/students/${id}`)
            .then(student => {
                //console.log(student)
                return student.data
            })
    }
}

module.exports = {
    getStudentsData
}