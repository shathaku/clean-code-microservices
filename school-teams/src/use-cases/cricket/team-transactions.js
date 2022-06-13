function makeFindAllTeam(findTeam) {
    return async function() {
        const ret = await findTeam();
        return ret;
    }
}

function makeFindByPlayer(findPlayer) {
    return async function(playerId) {
        const ret = await findPlayer(playerId);
        return ret;
    }
}

function makeAddNewPlayers(addPlayer, buildTeam, getStudentById) {
    return async function(players) {
        const newPlayersArr = await Promise.all(players.map(player => {
            const { serialNo, role, playerNumber, inPlayingEleven } = player;
            const teamBuilder = buildTeam({ serialNo, role, playerNumber, inPlayingEleven })
            return getStudentById(teamBuilder.getSerialNo()).then(data => {
                console.log(data)
                return {
                    name: data[0].name,
                    serialNo: teamBuilder.getSerialNo(),
                    role: teamBuilder.getRole(),
                    playerNumber: teamBuilder.getPlayerNumber(),
                    inPlayingEleven: teamBuilder.getPlayingElevenStatus()
                }
            }).catch(e => console.log(e))
        }));
        console.log(newPlayersArr)
        const ret = await addPlayer(newPlayersArr);
        return ret;
    }
}

module.exports = {
    makeAddNewPlayers,
    makeFindAllTeam,
    makeFindByPlayer
}