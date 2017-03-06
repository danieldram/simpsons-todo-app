var chakram = require('chakram')
var expect = chakram.expect

describe("DELETE: /todo/update/:username/:id", function() {
    it("successfully deletes the todo identified by the id from the db", function () {

      return chakram.delete("http://localhost:3003/todo/delete/Leanne%20Graham/12WQ-4345").then(response =>{

        let body = response.body
        expect(body.success).to.be.true
        expect(body.data).to.be.an('array')
        expect(response).to.have.status(200)

      })
    })
})
