function teamTransaction(db) {
    async function findById(studentId) {
        try {
            const client = await db.connect();
            console.log(studentId)
            const result = await client.db().collection('players').find({serialNo: Number(studentId)}).toArray();
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
            const result = await client.db().collection('players').find().toArray()
;            console.log(result)
            await db.disconnect();
            return result;
        } catch (error) {
            console.log(error);
            db.disconnect();
        }
    }

    async function insert(players) {
        try {
            const client = await db.connect();
            const result = await client.db().collection('players').insertMany(players);
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
    teamTransaction
}