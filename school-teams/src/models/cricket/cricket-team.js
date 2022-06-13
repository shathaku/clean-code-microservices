function makeCricketTeam() {
    return function({
        serialNo, role, playerNumber, inPlayingEleven
    }) {
        return {
            getSerialNo: () => serialNo,
            getRole: () => role,
            getPlayerNumber: () => playerNumber,
            getPlayingElevenStatus: () => inPlayingEleven
        }
    }
}

module.exports = {makeCricketTeam}