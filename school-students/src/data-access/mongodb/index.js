function studentTransaction(db) {
    async function findById(studentId) {
        //console.log(studentId)
        try {
            const client = await db.connect();
            const result = await client.db().collection('students').find({serialNo: Number(studentId)}).toArray();
            //console.log(result)
            await db.disconnect();
            return result;
        } catch (error) {
            console.log(error);
            db.disconnect();
        }
    }

    async function findAll() {
        try {
            const client = await db.connect();
            const result = await client.db().collection('students').find().toArray()
;            console.log(result)
            await db.disconnect();
            return result;
        } catch (error) {
            console.log(error);
            db.disconnect();
        }
    }

    async function insert(students) {
        try {
            const client = await db.connect();
            const result = await client.db().collection('students').insertMany(students);
            await db.disconnect();
            return result;
        } catch (error) {
            console.log(error);
            db.disconnect();
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