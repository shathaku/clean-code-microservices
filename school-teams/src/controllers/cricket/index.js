const { getTeam, getPlayer, addPLayers } = require('./manage-team');
const cricketTeam = require('../../use-cases/cricket')

const getCricketTeam = getTeam(cricketTeam);
const getCricketPlayer = getPlayer(cricketTeam);
const addCricketPlayers = addPLayers(cricketTeam);

module.exports = {
    getCricketTeam,
    getCricketPlayer,
    addCricketPlayers
}