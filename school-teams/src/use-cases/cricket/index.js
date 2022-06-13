const { makeAddNewPlayers, makeFindByPlayer, makeFindAllTeam } = require('./team-transactions');
const { buildTeam } = require('../../models/cricket')
let {
    findPlayer,
    findTeam,
    addPlayer,
    updatePlayer,
    removePlayer
} = require('../../data-access/cricket') // DB
const { getStudentById } = require('../../external-interface');

const findAllTeam = makeFindAllTeam(findTeam);
const findByPlayer = makeFindByPlayer(findPlayer);
const addNewPlayers = makeAddNewPlayers(addPlayer, buildTeam, getStudentById);

module.exports = {
    findAllTeam,
    findByPlayer,
    addNewPlayers
}