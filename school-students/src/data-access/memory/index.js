function studentTransaction(db) {
  async function findById(studentId) {
    console.log(studentId)
      try {
          const result = db.filter(elem => elem.serialNo == studentId);
          console.log(result)
          return result;
      } catch (error) {
          console.log(error);
      }
  }

  async function findAll() {
      try {
          return db;
      } catch (error) {
          console.log(error);
      }
  }

  async function insert(students) {
      try {
          db.push(...students)
          console.log(db)
          return db;
      } catch (error) {
          console.log(error);
      }
  }

  function update() {
      
  }

  function remove() {
      
  }

  return {
      findById,
      findAll,
      insert,
      update,
      remove
  }
}

module.exports = {
  studentTransaction
}