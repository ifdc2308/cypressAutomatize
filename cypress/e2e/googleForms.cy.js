describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://cnpj-pesquisar.netlify.app/')

    // Preencher o input e clicar no botão
    cy.get('input[aria-label="Pesquisar CNPJ"]').type('09094300000151');
    cy.get('button[aria-label="search"]').click();

    // Esperar por um elemento que aparece após o clique, por exemplo, um resultado de busca
    cy.get('.resultado', { timeout: 10000 }).should('be.visible');
  });
});
