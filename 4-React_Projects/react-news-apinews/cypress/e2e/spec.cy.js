describe('My First Test', () => {
  describe('My First Test', () => {
    it('Does not do much!', () => {
      expect(true).to.equal(true)
    })
  })

  describe('News API Test', () => {
    const apiUrl = 'https://newsapi.org/v2/everything?q=sports&apiKey=607a8b3e10284723ab07bf29f5993191';
  
    it('should return a status of 200', () => {
      cy.request(apiUrl)
        .its('status')
        .should('equal', 200);
    });
  
    it('should return a valid response with articles', () => {
      cy.request(apiUrl)
        .its('body')
        .should((body) => {
          expect(body).to.have.assert('articles');
        });
    });

    // 
    
     
    it('should have articles with expected fields', () => {
      cy.request(apiUrl).its('body.articles', { timeout: 10000 }).should('exist');
      cy.request(apiUrl)
        .its('body.articles')
        .should('exist')
        .each((article) => {
          expect(article).to.have.property('title');
          expect(article).to.have.property('description');
          expect(article).to.have.property('urlToImage');
          expect(article).to.have.property('url');
          expect(article.title).to.be.a('string');
          // expect(article.description).to.be.a('string');
         });
    });
   
  });

  
})
// describe('json server testing ', () => {
//   it('Does not do much!', () => {
//     expect(true).to.equal(true)
//   })
// })