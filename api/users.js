var express = require("express"),
    logger = require('./logger'),
    app = express();

// array to hold users
let users = [
    {id: 1, firstName:"fnam1",lastName:"lnam1",email:"abc@yahoo.com", checkInTime: new Date()},
    {id: 2, firstName:"fnam2",lastName:"lnam2",email:"bbb@gmail.com", checkInTime: new Date()},
    {id: 3, firstName:"fnam3",lastName:"lnam3",email:"ccc@yahoo.com", checkInTime: new Date()},
    {id: 4, firstName:"fnam4",lastName:"lnam4",email:"hhh@yahoo.com", checkInTime: new Date()},
    {id: 5, firstName:"fnam5",lastName:"lnam5",email:"bdd@yahoo.com", checkInTime: new Date()}
];

// request to get all the users
app.get("/list", function(req, res) {
    logger.info("users route");
    res.json(users);
})

// request to get all the users by userName
app.get("/users/:userName", function(req, res) {
    logger.info("filter users by username:::::"+req.params.userName);
    let user = users.filter(function(user){
        if(req.params.userName === user.userName){
            return user;
        }
    })
    res.json(user);
})

// request to post the user
//req.body has object of type {firstName:"fnam1",lastName:"lnam1",userName:"username1"}
app.post("/user", function(req, res) {
    console.log(req.body.user);
    let newUser = {...req.body.user, id:users.length+1, checkInTime: new Date()}
    users.push(newUser);
    res.json(users);
})

app.put("/user/:id", function(req, res) {
    console.log(req.params.id);
    console.log(req.body.user);
    const users = users.map(user => {
        if(user.id === req.params.id) {
            user = {...req.body.user};
            return user;
        }
    });
    res.json(users);
});

app.delete("/user/:id", function(req, res) {
    users = users.filter(user => user.id != req.params.id);
    res.json(true);
});

module.exports = app;