var chakram = require('chakram')
var expect = chakram.expect

describe("POST: /todo/add/:username", function() {
    it("successfully posts new todo in databae for specific user", function () {
      var form = {
        id:`12WQ-4345`,
        todo:'Pick Up Bart',
        status:'pending',
        username:'Leanne Graham'
      }

      return chakram.post("http://localhost:3003/todo/add/Leanne%20Graham", form).then(response =>{

        let body = response.body
        expect(body.success).to.be.true
        expect(body.data).to.be.an('array')
        expect(response).to.have.status(200)

      })
    })
})
