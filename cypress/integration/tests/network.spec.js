context('Network Requests', () => {
    it("testing game network", () => {
      cy.visit('https://pmrmoura.github.io/tetris-101/')
    })

    it("testing server", () => {
        cy.server().should((server) => {
            expect(server.delay).to.eq(0)
            expect(server.method).to.eq('GET')
            expect(server.status).to.eq(200)
            expect(server.headers).to.be.null
            expect(server.response).to.be.null
            expect(server.onRequest).to.be.undefined
            expect(server.onResponse).to.be.undefined
            expect(server.onAbort).to.be.undefined
            expect(server.enable).to.be.true
            expect(server.force404).to.be.false
        })
    })




})