const guid = require("guid")
const express = require ("express")
const bodyParser = require("body-parser")
const Task = require("./task.js")
const mustacheExpress = require('mustache-express');
const app = express()

app.engine('mustache', mustacheExpress());

app.set('view engine', 'mustache');
app.set('views','./views');

app.use(bodyParser.urlencoded({extended: false}))
var task1 = new Task({

    title:"dishes", 
    priority: "high", 
    dateCreated: "today"
})
var task2 = new Task({

    title:"Walk The Dog", 
    priority: "low", 
    dateCreated: "today"
})
task1.id = "test"
task2.id = "test2"
let tasks = []

app.get("/viewtodo", function(req, res){
    res.render("viewtodo",{ToDoArray : tasks})
})

app.get("/tasks", function(req, res){

    res.json({tasks: tasks})
})

app.get("/tasks1", function(req, res){
    res.render("todo")
})

app.post("/newToDoItem", function(req,res){
    var title = req.body.itemTitle
    var priority = 'high'
    var dateCreated = Date.now()
    var task = new Task(
        {
            title: title,
            priority: priority,
            dateCreated: dateCreated
        }
    )
    tasks.push(task)

    res.render("viewtodo", {ToDoArray : tasks})
})

app.delete("/tasks/:id", function(req,res){
    let taskId = req.params.id
    
    function filterByID(task){
        console.log(task.id, taskId)
        if(taskId != task.id){

            return task
        }
        }
    tasks = tasks.filter(filterByID)  
    console.log(tasks) 
    res.end() 

})





app.listen(3000,function(){

    console.log("3000")
})