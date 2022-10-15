
/**
 * 
 * @param {{
 *      elementUrl: string
 * }} metaData 
 * 
 * @returns {CustomElementConstructor}
 */
function ComponentFactory(metaData) {
    return class extends HTMLElement {
        constructor() {
            super();
        }

        async connectedCallback() {
            const view = await (await fetch(metaData.elementUrl)).text();
            const template = document.createElement('template');
            template.innerHTML = view;
            const clone = document.importNode(template.content, true);
    
            this.attachShadow({ mode: 'open' }).appendChild(clone);
        }
    }
}


customElements.define('stack-animation', ComponentFactory({ elementUrl: '/elements/stack-animation.html'}));
customElements.define('webtape-grow-animation', ComponentFactory({ elementUrl: '/elements/grow-animation.html'}));
customElements.define('landing-page-animation', ComponentFactory({ elementUrl: '/elements/landing-page-animation.html'}));