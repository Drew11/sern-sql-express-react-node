const fs = require("fs");
const sqlSchema = fs.readFileSync('./server/data/user-schema.sql').toString();

module.exports = function(db) {
    console.log(db)
    db.serialize(function() {
        db.run(sqlSchema);
    });
};