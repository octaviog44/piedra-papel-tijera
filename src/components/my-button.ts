class MyButton extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        const container = document.createElement('div');
        const style = document.createElement('style');

        container.innerHTML = '<button>Empezar</button>';
        style.textContent = `
            button {
                width: 322px;
                height: 87px;
                border: solid 10px #001997;
                background-color: #006CFC; 
                font-size: 45px;
                color: #D8FCFC;
                cursor: pointer;
            }
        `;

        shadow.appendChild(style);
        shadow.appendChild(container);

        const button = container.querySelector('button');
        button?.addEventListener('click', () => {
            const navigateTo = this.getAttribute('data-navigate');
            if (navigateTo) {
                window.location.href = navigateTo;
            }
        });
    }
}

customElements.define('my-button', MyButton);