describe('template spec', () => {
  it('task1', () => {
    //sign up
    cy.visit("/")
    cy.get("li").contains("Home")
    //cy.visit("/")
    cy.get("li").contains("Sign up").click()
    cy.contains("h1","Sign up")
    cy.get("[type=text]").type("qutadaadnan")
    cy.get("[type=email]").type("taskcypress@gmail.com")
    cy.get("[type=password]").type("Task1@Cypress")
    cy.contains("button","Sign up").click()
    cy.get("a.logo-font.ng-binding")
    cy.contains("span","interactive")
    cy.contains("p","Have an account?").click()
   
    //cy.visit("/login")
    // home
   
  })
})