const express = require('express')

const app = express()

app.get('/api/users', function(req,res){
    res.sendFile('users.json')
})

const PORT = 3002
app.listen(PORT, function(){
    console.log("Listening on port", PORT)
})