var express = require('express');
var router = express.Router();

const db = require('../db.js');
const bp = require('body-parser');
const cors = require('cors')

router.use(bp.json());
router.use(cors());

router.get('/', (request,response) => {
    const queryString = 'select * from Users';
    db.pool.query(queryString, (error, result, fields) => {
        if (error) {
            console.log("ERROR: "+error);
            response.status(500).json(JSON.stringify(error))
        }

        if (result.length > 0) {
            console.log(JSON.stringify(result));
            response.status(200).json(result);
        } else {
            console.log('Query returned zero results');
            response.status(204).end();
        };
    });
});

router.post("/create", (request, response) => {
    console.log(request.body)
    const content = request.body;
    const queryString = "insert into Users (Email, User, Password,Chips) values (?,?,SHA2(?),500)";

    db.pool.query(queryString, [content.Email,content.Name,content.Passowrd], (error, result, fields) => {
        if (error) {
            console.log("ERROR: "+error);
            response.status(500).json(JSON.stringify(error))
        } else {
            response.status(200).json({"Id": result.insertedId});
            console.log({"Id": result.insertedId});
            response.status(200).end();
        }
    })
})
module.exports = router;