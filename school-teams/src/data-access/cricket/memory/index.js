function teamTransaction(db) {
    async function findById(playerId) {
        try {
            const result = db.filter(elem => elem.serialNo == playerId);
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

    async function insert(players) {
        try {
            db.push(...players)
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
    teamTransaction
}