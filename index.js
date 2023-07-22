const express = require('express');
const port = 5000;
const mysqlConnection = require('./connection');

const app = express();

const bodyParser = require('body-parser');

app.use(bodyParser.json());

//inserting an employee
app.post('/employee' , (req,res)=>{
    const emp = [req.body.name , req.body.Salary];
    mysqlConnection.query('INSERT INTO employee (name , Salary) VALUES(?) ' , [emp] , (err,rows)=>{
        if(err){
            console.log(err);
        }else{
            res.send(rows);
            console.log(rows);
        }
    })
})

//getting all users
app.get('/employee' , (req,res)=>{
    mysqlConnection.query('SELECT * FROM employee',(err ,rows)=>{
        if(err){
            console.log(err);
        }else{
            console.log(rows);
            res.send(rows);
        }
    })
})

//getting a particular user
app.get('/employee/:id' , (req,res)=>{
    mysqlConnection.query('SELECT * FROM employee WHERE id=?' , [req.params.id] , (err,rows)=>{
        if(err){
            console.log(err);
        }else{
            res.send(rows);
            console.log(rows);
        }
    })
})
  
//deleting an employee
app.delete('/employee/:id' , (req,res)=>{
    mysqlConnection.query('DELETE FROM employee WHERE id=?' , [req.params.id] , (err,rows)=>{
        if(err){
            console.log(err);
        }else{
            res.send(rows);
            console.log(rows);
        }
    })
})

//updating employee
app.patch('/employee' , (req,res)=>{
    const emp = req.body;
    mysqlConnection.query('UPDATE employee SET ? WHERE id='+emp.id,[emp],(err,rows)=>{
        if(err){
            console.log(err);
        }else{
            res.send(rows);
            console.log(rows);
        }
    })
})


app.listen(port , ()=>{
    console.log('Server is running on the port' , port);
});