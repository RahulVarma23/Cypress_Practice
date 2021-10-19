describe('POC',()=>{


    it('verify readfile',()=>{
        cy.readFile('C:/Users/Rahul_Varma/A_Rahul/Docker trainings/rahul.txt').should('eq','hello world!')
    })
})