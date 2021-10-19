
describe('HTTP GET methods',function(){
    it('verify GET request',function(){
       cy.request({
           method : 'GET',
           url:'https://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=439d4b804bc8187953eb36d2a8c26a02'
       }).then((response)=>{
        expect(response.status).equals(200)
        expect(response.body).has.property('name').equals("London")
        expect(response.body.main).has.property('humidity',81)
        expect(response.body.sys).has.property('country','GB')
        expect(response.headers['content-type']).equals('application/json; charset=utf-8')
       })
    })
})