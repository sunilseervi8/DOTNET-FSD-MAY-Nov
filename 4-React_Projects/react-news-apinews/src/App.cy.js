import React from 'react'
import App from './App'
import { mount } from 'cypress/react';
import DummyCat from './components/Dummy/dummyCategory';

import Registration from './components/UserAuthentication/Registration';
import { BrowserRouter } from 'react-router-dom';

describe('<App />', () => {
  it('is t working',()=>{
    expect(true).to.equal(true)
  })
  it('renders', () => {
    cy.mount(<BrowserRouter>
    <App />
    </BrowserRouter>)
  })
})



describe('DummyCat Component', () => {
  it('should render the DummyCat component', () => {
    mount(<DummyCat/>);
  });
});

describe('Registration Component', () => {
  it('should render the Registration component', () => {

    mount(<BrowserRouter>
    <Registration />
    </BrowserRouter> 
    );
  });

});
