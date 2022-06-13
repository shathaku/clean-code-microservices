var counter = 1;

function makeFindAllStudents(studentDbAccess) {
    return async function() {
        const ret = await studentDbAccess.findAllStudents();
        return ret;
    }
}

function makeFindByStudent(studentDbAccess) {
    return async function(playerId) {
        const ret = await studentDbAccess.findStudent(playerId);
        return ret;
    }
}

function makeAddNewStudents(studentDbAccess, makeStudent) {
    return async function(students) {
        const newStudentsArr = students.map(student => {
            const { name, age, grade, prefect } = student;
            const teamBuilder = makeStudent({ name, age, grade, prefect })
            return {
                serialNo: counter++,
                name: teamBuilder.getName(),
                age: teamBuilder.getAge(),
                grade: teamBuilder.getGrade(),
                prefect: teamBuilder.isPrefect()
            }
        });
        console.log(newStudentsArr)
        const ret = await studentDbAccess.addStudents(newStudentsArr);
        return ret;
    }
}

module.exports = {
    makeAddNewStudents,
    makeFindAllStudents,
    makeFindByStudent
}