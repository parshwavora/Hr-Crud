const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: '0000',
    database:'employeeSystem',
});
const app = express();
app.use(cors())
app.use(express.json())
app.post('/create',(req,res)=>{
    console.log(req.body);
    let [name,position,age,salary] = req.body.data;
    age = Number(age);
    salary =Number(salary);
    db.query("insert into employee (name,position,age,salary) values (?,?,?,?)",[name,position,age,salary],(err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.send(`sucess:${result}`);
        }
    })
})
app.get('/employees', (req,res)=>{
 db.query('select * from employee',(err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.send(result)
        }
    });

})

app.listen(3001,()=>{console.log("running 3001")})