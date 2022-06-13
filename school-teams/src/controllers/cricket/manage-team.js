function getTeam(cricketTeam) {
    return function(req, res) {
        cricketTeam.findAllTeam()
            .then(data => {
                console.log("got team data")
                res.send(data)
            })
    }
}

function getPlayer(cricketTeam) {
    return function(req, res) {
        cricketTeam.findByPlayer(req.params.playerId)
            .then(data => {
                console.log("got player data")
                res.send(data)
            })
    }
}

function addPLayers(cricketTeam) {
    console.log("Adding new players")
    return function(req, res) {
        //console.log(req.body)
        cricketTeam.addNewPlayers(req.body)
            .then(data => {
                console.log("New players added to cricket team !!")
                res.send(data)
            })
    }
}

module.exports = {
    getTeam,
    getPlayer,
    addPLayers
}