function connectionHandler(client) {
    return function(){
        return {
            init: async function() {
                await client.connect();
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