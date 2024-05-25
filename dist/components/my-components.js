"use strict";
class MyComponent extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        const container = document.createElement('div');
        const style = document.createElement('style');
        container.innerHTML = '<h1>Piedra Papel o Tijera</h1>';
        style.textContent = `
            h1 {
                font-size: 80px;
                color: #009048;
            }
        `;
        shadow.appendChild(style);
        shadow.appendChild(container);
    }
}
customElements.define('my-component', MyComponent);
