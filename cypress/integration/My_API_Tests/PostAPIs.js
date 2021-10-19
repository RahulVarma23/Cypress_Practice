
const data=require('../../fixtures/Details')
describe('HTTP post methods',()=>{

  it('verify POST request',()=>{
    cy.request({
        method : 'POST',
        url:'https://reqres.in/api/register',
        body : {
            "email": data.email,
            "password": data.password
          }
    }).then((response)=>{
        cy.log(JSON.stringify(response))
        expect(response.status).equals(200)
        expect(response.statusText).equals('OK')
        expect(response.body).has.property('id',4)
    })
  })
})