var chakram = require('chakram')
var expect = chakram.expect

describe("GET: /todo/get/:username", function() {
    it("returns back todos made by that use", function () {


      return chakram.get("http://localhost:3003/todo/get/Leanne%20Graham").then(response =>{

        let body = response.body
        expect(body.success).to.be.true
        expect(body.data).to.be.an('array')
        expect(body.data[0]).includes.keys('todo')
        expect(response).to.have.status(200)

      })
    })
})
