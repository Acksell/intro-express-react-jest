
const express = require('express')
const app = express()

app.get('/api/users', function(req,res){
    return res.status(200).sendFile(__dirname + "/users.json")
})

module.exports = app