const { MongoClient } = require('mongodb');
const { connectionHandler } = require('./connection-handler');
const config = require('../../config');

const uri = `mongodb://${config.mongo.MONGO_HOST}:${config.mongo.MONGO_PORT}/dev`;
const client = new MongoClient(uri);

const handler = connectionHandler(client);
const connect = handler().init;
const disconnect = handler().disconnect;

module.exports = {
    connect,
    disconnect
}