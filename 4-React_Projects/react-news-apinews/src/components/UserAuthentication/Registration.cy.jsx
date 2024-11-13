import React from 'react'
import Registration from './Registration'
import { BrowserRouter } from 'react-router-dom'
import {mount} from 'cypress/react'
// import {user} from '../../asset/data.json'
// describe('<Registration />', () => {
//   it('renders', () => {
//     // see: https://on.cypress.io/mounting-react
//     cy.mount(<BrowserRouter>
//     <Registration />
//     </BrowserRouter>)

//   })
// })

describe('Registration Component', () => {
  it('should render the Registration component', () => {
    mount(<BrowserRouter><Registration /></BrowserRouter>);
    cy.get('form').should('exist');
  });

  it('should have the correct initial values', () => {
    mount(<BrowserRouter><Registration /></BrowserRouter>);
    cy.get('input[name="fname"]').should('have.value', '');
    cy.get('input[name="email"]').should('have.value', '');
    cy.get('input[name="password"]').should('have.value', '');
  });

  it('should submit the form', () => {
    mount(<BrowserRouter><Registration /></BrowserRouter>);
    cy.get('input[name="fname"]').type('Sunil Seervi');
    cy.get('input[name="email"]').type('sunil@gmail.com');
    cy.get('input[name="password"]').type('Sunil@123');
    cy.get('form').submit();
    cy.get('button[type="submit"]').click();
  });
}); 

describe('Post User Data', () => {
  it('should post user data to the server', () => {
    cy.fixture('example.json').then((user) => {
      cy.request({
        method: 'POST',
        url: 'http://localhost:3000/user', 
        body: user,
        headers: {
          'Content-Type':'application/json'
        }
      }).then((response) => {
        expect(response.status).to.eq(201); 
        expect(response.body).to.have.property('id'); 
      });
    });
  });
});