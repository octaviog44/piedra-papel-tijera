"use strict";
class Router {
    constructor() {
        this.addEventListeners();
    }
    addEventListeners() {
        const buttons = document.querySelectorAll('[data-navigate]');
        buttons.forEach(button => {
            button.addEventListener('click', (event) => {
                const target = event.currentTarget.getAttribute('data-navigate');
                if (target) {
                    this.navigate(target);
                }
            });
        });
    }
    navigate(page) {
        window.location.href = page;
    }
}
// Inicializar el router cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    new Router();
});
