var chakram = require('chakram')
var expect = chakram.expect

describe("POST: /todo/update/:username/:id", function() {
    it("successfully updates the todo with a provided update object", function () {
      var form = {
        id:`12WQ-4345`,
        todo:'Pick Up Bart',
        status:'complete',
        username:'Leanne Graham'
      }

      return chakram.post("http://localhost:3003/todo/update/Leanne%20Graham/12WQ-4345`", form).then(response =>{

        let body = response.body
        expect(body.success).to.be.true
        expect(body.data).to.be.an('array')
        expect(response).to.have.status(200)

      })
    })
})
