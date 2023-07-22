const mysql = require('mysql2');

const mysqlConnection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'mysql@24479#',
    database : 'emplyeeDb'
});

 mysqlConnection.connect((err)=>{
    if(err){
        console.log('Error in Database connection');
    }else{
        console.log('Database connected sucessfully');
    }
});

module.exports = mysqlConnection ;