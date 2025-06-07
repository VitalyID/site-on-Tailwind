class Buttons extends HTMLElement {
	// it'a observer for attrubutes
	static get observedAttributes() {
		return [
			'text',
			'gap',
			'idSprite',
			'color',
			'fontSize',
			'fontFamily',
			'padding',
			'background',
			'borderRadius',
			'border',
		];
	}

	constructor() {
		super();

		// creating shadowRoot
		const shadowRoot = this.attachShadow({ mode: 'open' });

		// creating elements
		this.textSpan = document.createElement('span');
		this.iconSvg = document.createElement('svg');
		this.btn = document.createElement('div');
		this.use = document.createElement('use');

		// Creating elements in document
		this.btn.append(this.iconSvg);
		this.btn.append(this.textSpan);
		this.iconSvg.append(this.use);

		// link shadowTree with shadowRoot
		shadowRoot.append(this.btn);

		// creating style and set it in shadow
		this.styleElement = document.createElement('style');
		shadowRoot.prepend(this.styleElement);

		this.updateContent();
	}

	attributeChangedCallback(attr, oldValue, newValue) {
		console.log(`Аттрибут ${attr} изменился с ${oldValue} на ${newValue}`);
		if (this.oldValue !== newValue) {
			this.updateContent();
		}
	}

	updateContent() {
		const text = this.getAttribute('text') || 'Button';
		const gap = this.getAttribute('gap') || '10px';
		const idSprite = this.getAttribute('idSprite') || '';
		const color = this.getAttribute('color') || 'red';
		const size = this.getAttribute('fontSize') || '16px';
		const family = this.getAttribute('fontFamily') || 'sans-serif';
		const padding = this.getAttribute('padding') || '10px 20px';
		const bg = this.getAttribute('background') || 'gray';
		const brr = this.getAttribute('borderRadius') || '10px';
		const br = this.getAttribute('border') || 'black solid 1px';

		if (!idSprite) {
			this.iconSvg.style.display = 'none';
		} else {
			this.iconSvg.style.display = 'block';
		}

		this.textSpan.textContent = text;

		const newStyle = `
		div {
			display:flex;
			justify-content:center;
			align-items:center;
			gap: ${gap};
			padding: ${padding};
			background: ${bg};
			border: ${br};
			border-radius: ${brr};
			cursor: pointer}
			
		span {
			color: ${color};
			font-size: ${size};
			font-family:${family}
		
		};
		`;

		this.styleElement.textContent = newStyle;

		this.use.setAttributeNS(
			'http://www.w3.org/1999/xlink',
			'xlink:href',
			'#icon-' + idSprite
		);
	}
}

customElements.define('custom-buttons', Buttons);
