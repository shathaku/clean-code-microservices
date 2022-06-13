const express = require('express')
const router = express.Router();
const { getCricketTeam, getCricketPlayer, addCricketPlayers } = require("../controllers/cricket")

router.get('/team/cricket', getCricketTeam);
router.get('/team/cricket/:playerId', getCricketPlayer);
router.post('/team/cricket/players', addCricketPlayers);

module.exports = router;