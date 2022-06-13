//const db = require('../../db/cricket/mongodb');
const db = require('../../db/cricket/memory');
//const { teamTransaction } = require('./mongodb');
const { teamTransaction } = require('./memory');

const transaction = teamTransaction(db);

const findPlayer = transaction.findById;
const findTeam = transaction.findAll;
const addPlayer = transaction.insert;
const updatePlayer = transaction.update;
const removePlayer = transaction.remove;

module.exports = {
    findPlayer,
    findTeam,
    addPlayer,
    updatePlayer,
    removePlayer
}