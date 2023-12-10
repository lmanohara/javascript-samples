import { Chance } from "chance";

const chance = new Chance();
const randomIntegers = chance.n(chance.integer, 10);

describe('stack integration test spec', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('push element to stack', () => {
    cy.pushToStack(randomIntegers);
    cy.get('#peekBtn').click();

    cy.get('#showElements').should('have.value', randomIntegers.at(-1));
  });

  it('pop element from stack', () => {
    cy.pushToStack(randomIntegers);
    cy.get('#popBtn').click();
    cy.get('#peekBtn').click();

    cy.get('#showElements').should('have.value', randomIntegers.at(-2));
  });

})