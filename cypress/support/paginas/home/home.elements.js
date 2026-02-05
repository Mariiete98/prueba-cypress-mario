export class HomeElements {
    static get menuCategorias() {
        return {
        get movil() {
            return cy.contains("a", "Phones");
        },
        get laptop() {
            return cy.contains("a", "Laptops");
        },
        get monitor() {
            return cy.contains("a", "Monitors");
        },
        };
    }

    // SELECTOR DINAMICO
    // da error el get con parámetro, no debe tener, asi que sin get y en el return
    // en vez de hacer un selector para cada producto es un SELECTOR DINAMICO
    // pasandole de parametro el producto se obtendrá
    static producto(nombreProducto) {
        return cy.contains('a', nombreProducto, {timeout: 30000});
        
    }
}