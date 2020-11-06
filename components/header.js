class Header extends HTMLElement {
    constructor() {
        super();
    }
    
    
    connectedCallback() {
        this.innerHTML = `
        <style>
        h1{
            font-size: 67px;
            line-height: 0.8;
            letter-spacing: -5px;
            margin-bottom: 0.25rem;
        }
        hr{
            height: 0.5px;
        }
        </style>
        <header class="m-b" id="header">
        <h1 class="t-u p-n" id="logo">Hello,<br>Anyong<br>I'm Lisa Lee</h1>
        <hr class="line">
        </header>
        `;
    }
}

customElements.define('header-component', Header);