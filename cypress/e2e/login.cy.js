// const login = (name) => {
//   cy.session(name, () => {
//     cy.request({
//       method: 'POST',
//       url: 'https://accounts.spotify.com/en/login?continue=https%3A%2F%2Faccounts.spotify.com%2Fauthorize%3Fscope%3Duser-read-email%252Cplaylist-read-private%252Cuser-top-read%26response_type%3Dcode%26redirect_uri%3Dhttp%253A%252F%252Flocalhost%253A3000%252Fapi%252Fauth%252Fcallback%252Fspotify%26state%3DQCIG6lTgwPSdMXOgCR6Xt6fWhv1geK0mAG2-HQ5jPdQ%26client_id%3D20e07b9a3e3b4bb8b303721a3d9afa41',
//       body: { name, password: 's3cr3t' },
//     }).then(({ body }) => {
//       window.localStorage.setItem('authToken', body.token)
//     })
//   })
// }

describe('Login', () => {

  
  it('should log the user in when the login button is pressed', () => {
    cy.visit('http://localhost:3000')
    cy.get('[data-cy="login"]').click()
    cy.wait(2000)
    cy.get('button').click()
    cy.wait(2000)
    cy.origin('https://accounts.spotify.com', () => {
      cy.get('[id="login-username"]').click()
      cy.get('[id="login-username"]').type('dgomez1224@yahoo.com')
      cy.get('[id="login-password"]').click()
      cy.get('[id="login-password"]').type('Codefortest123')
      cy.get('[id="login-password"]').type('{enter}')
      cy.wait(10000)
      cy.get('button[data-testid="auth-accept"]').click()
})
    

})
})