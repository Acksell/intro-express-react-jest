const fetch = require('node-fetch')

const getVisitkort = function(user) {
    return user.name.concat(" ", user.email, " ",user.website) 
}

module.exports = {
    getVisitkort
}