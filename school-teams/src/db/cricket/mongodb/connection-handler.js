function connectionHandler(client) {
    return function(){
        return {
            init: async function() {
                await client.connect();
                // const result = await client.db().collection('students').find();
                // console.log(result)
                return client
            },
            disconnect: async function() {
                await client.close();
            }
        }
    }
}

module.exports = {
    connectionHandler
}