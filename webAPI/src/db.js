require('dotenv').config({path: __dirname + '/.env'});
let mysql2 = require('mysql2');

const db_host = process.env.MYSQL_HOST
const db_name = process.env.MYSQL_DATABASE
const db_userid = process.env.MYSQL_USER;
const db_password = process.env.MYSQL_PASSWORD;

let pool;
let isConnected = false;
let configPool = {
   host: db_host,
   user: db_userid,
   password: db_password,
   database: db_name,
   waitForConnections: true,
   connectionLimit: 15,
   queueLimit: 0
}

try{
   pool = mysql2.createPool(configPool);
   isConnected = true;
}
catch(err){
   console.log(err);
}

function isDbConnected() {
   return isConnected;
}

function runQueryShowTables() {

   const queryString = 'SHOW TABLES';
   pool.query(queryString, (error, rows, fields) => { if (error) {
            console.log("ERROR " + error);
           }
      
           if (rows.length > 0) {
 
               rows.forEach(function(row) {
                   console.log(row.Tables_in_casino);
               });
              
           } else {
               console.log('query returned zero results');
           }
       });
 
   return;
}

if (typeof require !== 'undefined') {
   if (require.main == module) {
       if (isDbConnected()) {
           console.log("Database: Connected");
           console.log("Tables:");
           runQueryShowTables();
       }
   }
}
 
module.exports = {pool};