module.exports =  function buildMakeStudent(studentValidator) {
  return function({
    name, age, grade, prefect
  }) {
    let {error} = studentValidator({name, age, grade, prefect});
    if(error) {
      console.error(error)
      throw new Error(error);
    }
    return {
      getName: () => name,
      getAge: () => age,
      getGrade: () => grade,
      isPrefect: () => prefect
    }
  }
}