class SingleMem extends HTMLElement {
    connectedCallback() {
        this.id = this.getAttribute('id');

        const shadow = this.attachShadow({ mode: "open" });
        shadow.innerHTML = `
            <style>
                div {
                    background-color: var(--element-fill-color);
                }
                
                img {
                    width: 100%;
                    height:auto;
                    max-height: calc(80vh);
                }
            </style>

            <div>
                <img src="${this.getAttribute('src')}"">
            </div>
        `;
    }
}

customElements.define("single-mem", SingleMem);