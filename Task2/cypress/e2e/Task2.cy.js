describe('Cart Functionalities', () => {
    before('Validate that the user can add product to cart', () => {
        cy.visit("/");
        cy.get("#search").type("shirt"+"{enter}");
        cy.contains("a","Circe Hooded Ice Fleece").click();
        cy.wait(1000)
        cy.get(".swatch-option.text").contains("M").click();
        cy.get("[aria-label=Purple]").click()
        cy.get("#product-addtocart-button").click();
        cy.wait(3000)
        cy.get("[role=alert]").should("be.visible").and("contain","You added Circe Hooded Ice Fleece to your shopping cart")
        cy.get(".counter-number").should("be.visible").and("contain","1")
    });

   // it("delete product",()=>{
     //   cy.get(".showcart").click()
    //    cy.contains("span","View and Edit Cart").click()
    //    cy.get(".action.action-delete").click()
    //    cy.contains("p","You have no items in your ")
  //  })

    it("update and review",()=>{
      //update
        cy.get(".showcart").click()
        cy.contains("span","View and Edit Cart").click()
        cy.get(".action-edit").click()
        cy.get(".swatch-option.text").contains("L").click();
        cy.get("[aria-label=Green]").click()
        cy.get("#product-updatecart-button").click()
        cy.get("[role=alert]").should("be.visible").and("contain","Circe Hooded Ice Fleece was updated in your shopping cart.")

       //review
        cy.contains("a","Reviews").click()
       cy.get(".review-control-vote").should("not.be.empty")
       cy.get("#Rating_2_label span").should("be.visible")
       cy.get("#Rating_2_label").click()
       cy.get("#nickname_field").type("quta")
       cy.get("#summary_field").type("is good")
       cy.get("#review_field").type("gooooood")
       cy.contains("span","Submit Review").click()
       cy.get("[role=alert]").should("be.visible").and("contain","You submitted your review for moderation.")

    })
});