const getRoutes = require('../routes/users-get');
const loadDatabase = require('../data/setup-db');

module.exports = function (app, db) {
    // create database in case it was not created yeat,
    // or update in case of migrations
    loadDatabase(db);

    // start routes
    getRoutes(app, db);
};