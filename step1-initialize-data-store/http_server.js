const express = require('express');
const app     = express();
const low     = require('lowdb');
const fs      = require('lowdb/adapters/FileSync');
const adapter = new fs('db.json');
const db      = low(adapter);

// init the data store
db.defaults({ users: []}).write();

// return all users
app.get('/data', function(req, res){     
    res.send(db.get('users').value());
});

// start server
// -----------------------
app.listen(3000, function(){
    console.log('Running on port 3000!')
})