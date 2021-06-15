const express = require("express");
const app = express();
const db_source = "./server/database/db.sqlite";
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(db_source);
const bodyParser = require("body-parser");
const HTTP_PORT = 8000;
const cors = require('cors');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// Start server
app.listen(HTTP_PORT, () => {
    console.log("Server running on port %PORT%".replace("%PORT%",HTTP_PORT))
});


require('./routes')(app, db);


app.get('/api/users', (req, res, next) => {
    console.log(req.query)
    let limit = req.query.limit? `LIMIT ${req.query.limit}` : `` ;
    let offset = req.query.offset? `OFFSET ${req.query.offset}` : ``;

    console.log( limit, offset)
    const sql = `select
    users.id,
    users.first_name,
    users.last_name,
    users.email,
    users.gender,
    users.ip_address,
    sum(users_statistic.clicks) as total_clicks,
    sum(users_statistic.page_views) as total_views
    from users left join users_statistic on users.id = users_statistic.user_id group by id
    ${limit} ${offset}
    ;`;
    db.all(sql, (err, users) =>  {
        if(err) {
            console.log(err)
        }
        db.get(`select count(*) as length from users`, (err, data)=>{
            if (err) {
                res.status(400).json({"error":err.message});
            }else {
                res.json({
                    "message": "success",
                    "users" : users,
                    "length": data.length
                })
            }
        });
    });
});

app.get("/api/statistic/:id", (req, res, next) => {

    const id = req.params.id;
    const sql = `SELECT
	    *
    FROM
	    users_statistic
	WHERE users_statistic.user_id = ?
    `;
    const params = [id];

    db.all(sql, params, (err, rows) => {
        if (err) {
            res.status(400).json({"error":err.message});
            return;

        }
        res.json({
            "message":"success",
            "user_statistic": rows,
        })
    });
});

// app.get("/api/test", (req, res, next) => {
//
//     const sql = `select
//     users.id,
//     users.first_name,
//     users.last_name,
//     users.email,
//     users.gender,
//     users.ip_address,
//     sum(users_statistic.clicks) as total_clicks,
//     sum(users_statistic.page_views) as total_views
//     from users left join users_statistic on users.id = users_statistic.user_id group by id
//     LIMIT ${2} OFFSET ${1001}
//     ;`;
//
//     db.all(sql, (err, rows)=>{
//         if (err) {
//             res.status(400).json({"error":err.message});
//         }
//         db.get(`select count(*) as length from users`, (err, data)=>{
//             if (err) {
//
//                 res.status(400).json({"error":err.message});
//             }else {
//                 res.json({
//                     "message": "success",
//                     "users" : rows,
//                     "length": data.length
//                 })
//             }
//
//         });
//
//     });
//
// });
//
// app.patch("/api/users/:id", (req, res, next) => {
//     const inputData = [
//         req.body.email,
//         req.params.id
//     ];
//     console.log(inputData)
//
//     db.run(`UPDATE users SET email = ? WHERE users.id = ? ;`,
//         inputData
//         , (err, result) => {
//             if (err){
//                 console.log(err)
//                 res.status(400).json({"error": res.message})
//                 return;
//             }
//
//             res.json({
//                 message: "success",
//                 data: result
//             })
//         });
// });
//
// app.post('/api/register',function(req, res){
//     const {first_name, last_name, email, password } = req.body;
//
//     const sql =`INSERT INTO users (first_name, last_name, email, password) VALUES(?,?,?,?)`;
//         db.run(sql,[
//             first_name,
//             last_name,
//             email,
//             password], (err, rows)=>{
//         });
// });
//
//
// app.post('/api/login',function(req, res){
//     const {first_name, password } = req.body;
//
//     console.log(first_name, password)
//     const sql =`SELECT * FROM users WHERE users.first_name = ? AND users.password = ?`;
//     db.get(sql,
//         [first_name, password],
//         (err, result)=>{
//             if(err) {
//                 console.log(err)
//                 res.send({err: err});
//             }else {
//                 if(result){
//                     res.send(result)
//                 }else {
//                     res.send({message: 'Wrong username password combination'})
//                 }
//             }
//         }
//     )
// });
//
//
//
// app.get("/", (req, res, next) => {
//     res.json({"message":"Ok"})
// });