import {Given,When,Then  } from "cypress-cucumber-preprocessor/steps";

Given("The user navigate to magento website",()=>{
       cy.visit("/")
})
When("Click on What's New",()=>{
    cy.get("li a").contains("span", "What's New").click()
})
When("Click on Hoodies & Sweatshirts",()=>{
      cy.get(".item").contains("a","Hoodies & Sweatshirts").click()
      cy.get(".mode-list").first().click().wait(500)
      cy.get(".product-item-name").get("a.product-item-link").then((names)=>{
      for(let i=0;i<names.length;i++){
        cy.wrap(names[i]).invoke("text").then((productname)=>{
            cy.log(productname)
        })
      }

})
})
When("Click on Jackets",()=>{
    cy.get("li a").contains("span", "What's New").click()
    cy.get(".item").contains("a","Jackets").click()
    cy.get(".modes").should("be.visible").contains("span" ,"List").click({force: true})
    cy.get(".product-item-name").get("a.product-item-link").then((names)=>{
        for(let i=0;i<names.length;i++){
          cy.wrap(names[i]).invoke("text").then((productname)=>{
              cy.log(productname)
          })
        }
})
})

When("Click on Tees",()=>{
    cy.get("li a").contains("span", "What's New").click()
    cy.get(".item").contains("a","Tees").click()
    cy.get(".modes").should("be.visible").contains("span" ,"List").click({force: true})
    cy.get(".product-item-name").get("a.product-item-link").then((names)=>{
        for(let i=0;i<names.length;i++){
          cy.wrap(names[i]).invoke("text").then((productname)=>{
              cy.log(productname)
          })
        }
})
})

When("Click on Bras & Tanks",()=>{
    cy.get("li a").contains("span", "What's New").click()
    cy.get(".item").contains("a","Bras & Tanks").click()
    cy.get(".modes").should("be.visible").contains("span" ,"List").click({force: true})
    cy.get(".product-item-name").get("a.product-item-link").then((names)=>{
        for(let i=0;i<names.length;i++){
          cy.wrap(names[i]).invoke("text").then((productname)=>{
              cy.log(productname)
          })
        }
})
})

When("Click on Pants",()=>{
    cy.get("li a").contains("span", "What's New").click()
    cy.get(".item").contains("a","Pants").click()
    cy.get(".modes").should("be.visible").contains("span" ,"List").click({force: true})
    cy.get(".product-item-name").get("a.product-item-link").then((names)=>{
        for(let i=0;i<names.length;i++){
          cy.wrap(names[i]).invoke("text").then((productname)=>{
              cy.log(productname)
          })
        }
})
})

When("Click on Shorts",()=>{
    cy.get("li a").contains("span", "What's New").click()
    cy.get(".item").contains("a","Shorts").click()
    cy.get(".modes").should("be.visible").contains("span" ,"List").click({force: true})
    cy.get(".product-item-name").get("a.product-item-link").then((names)=>{
        for(let i=0;i<names.length;i++){
          cy.wrap(names[i]).invoke("text").then((productname)=>{
              cy.log(productname)
          })
        }
})
})

Then("Open What's New Page",()=>{
    cy.get("li a").contains("span", "What's New").click()
    cy.get(".page-title").contains("span","What's New")

})