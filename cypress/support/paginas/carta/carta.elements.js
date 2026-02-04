export class CartaElements{
    static get obtenerBotones() {
        return {
        get placeOrder() {
            return cy.get('button', 'Place Order'); // ¿comprar?
        },
        };
    }

     static get links() {
        return {
        delete(producto) { // sin get, no obtenemos, se borra. ¿Como hago selector de eliminar una fila?
            return cy.contains('td', producto).closest("tr").find("a"); //busca la fila-ancestro de la casilla del producto, y baja a buscar su delete de tag <a
        },
        };
    }
}