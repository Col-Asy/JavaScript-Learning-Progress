const path = require('path');
const express = require('express');
const app = express();
const PORT = 6969;

app.use(express.static(path.join(__dirname,'public')))

let todos = ["singing", "dancing", "coding", "cycling", "running"];

app.get('/to-do-list', (req,res)=>{
    console.log(todos);
    res.send(todos);
    console.log('response sent');
})

app.get('/get-task', (req,res)=>{
    const {task} = req.query;
    console.log(task);
    if(!todos.includes(task)){
        todos.push(task);
        res.redirect('/to-do-list');
    }
    else{
        res.send('Task already exists');
        console.log('Task already exists');
    }
})

app.get('/moved-up', (req, res)=>{
    const {taskName} = req.query;
    // console.log(taskName);
    const index = todos.indexOf(taskName);
    // console.log(index);
    todos.splice(index, 1); //Delete kardia uski original position se
    todos.splice(index-1, 0, taskName); //moved it up by an index of 1
    // console.log(todos);
    res.redirect('/to-do-list');
})

app.get('/deleted', (req,res)=>{
    const {taskName} = req.query;
    const index = todos.indexOf(taskName);
    todos.splice(index, 1); //deleted it from the array
    res.redirect('/to-do-list');
})

app.get('/moved-down', (req,res)=>{
    const {taskName} = req.query;
    const index = todos.indexOf(taskName);
    todos.splice(index, 1);
    todos.splice(index+1, 0, taskName);
    res.redirect('/to-do-list');
})

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT} \n Link is- http://localhost:`+PORT);
})