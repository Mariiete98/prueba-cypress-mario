export class DetallesElements{
    static get obtenerBotones() {
        return {
        get anadirCarta() {
            return cy.contains('a', 'Add to cart');
        },
        };
    }
}