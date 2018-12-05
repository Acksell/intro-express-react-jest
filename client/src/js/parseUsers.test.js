const parseUsers = require('./parseUsers.js')

describe('getVisitkort',()=>{
    test('returns correct format',()=>{
        const user = {name:"Axel Engström", email:"axelen@kth.se", website:"https://github.com/acksell"}
        const result = parseUsers.getVisitkort(user)
        const expected = "Axel Engström axelen@kth.se https://github.com/acksell"
        expect(result).toBe(expected)
    })
    test('returns correct format',()=>{
        const user = {name:"Acksell Engström", email:"axelen@kth.se", website:"https://github.com/acksell"}
        const result = parseUsers.getVisitkort(user)
        const expected = "Acksell Engström axelen@kth.se https://github.com/acksell"
        expect(result).toBe(expected)
    })
})