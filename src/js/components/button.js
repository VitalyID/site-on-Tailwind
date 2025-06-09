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
			'width',
			'height',
			'isactive',
			'iconW',
			'iconH',
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
		// this.use = document.createElement('use');

		// Creating elements in document
		this.btn.append(this.iconSvg);
		this.btn.append(this.textSpan);
		// this.iconSvg.append(this.use);

		// link shadowTree with shadowRoot
		shadowRoot.append(this.btn);

		// creating style and set it in shadow
		this.styleElement = document.createElement('style');
		shadowRoot.prepend(this.styleElement);

		this.updateContent();
	}

	attributeChangedCallback(attr, oldValue, newValue) {
		if (oldValue !== newValue) {
			this.updateContent();
		}
	}

	// connectedCallback() {

	// }

	updateContent() {
		const text = this.getAttribute('text') || 'Button';
		const gap = this.getAttribute('gap') || '15px';
		const idSprite = this.getAttribute('idSprite') || '';
		let color = this.getAttribute('color') || 'red';
		const size = this.getAttribute('fontSize') || '16px';
		const family = this.getAttribute('fontFamily') || 'sans-serif';
		const padding = this.getAttribute('padding') || '10px 20px';
		let bg = this.getAttribute('background') || 'gray';
		const brr = this.getAttribute('borderRadius') || '10px';
		let br = this.getAttribute('border') || 'black solid 1px';
		const width = this.getAttribute('width') || '40px';
		const height = this.getAttribute('height') || '10px';
		const active = this.getAttribute('isActive') === 'true';
		const iconW = this.getAttribute('iconW') || '21px';
		const iconH = this.getAttribute('iconH') || '21px';

		if (!idSprite) {
			this.iconSvg.style.display = 'none';
		} else {
			this.iconSvg.style.display = 'block';

			(async () => {
				try {
					const response = await fetch('./assets/icons/sprite/symbol-defs.svg');
					let textSprite = await response.text();

					// Удаляем скрипт live-server из строки
					const scriptRegex = /<script\b[^>]*>[\s\S]*?<\/script>/gi;
					textSprite = textSprite.replace(scriptRegex, '');

					const parser = new DOMParser();
					const nodeSprite = parser.parseFromString(
						textSprite,
						'image/svg+xml'
					);

					const symbolElement = nodeSprite.querySelector(idSprite);

					if (symbolElement) {
						while (this.iconSvg.firstChild) {
							this.iconSvg.removeChild(this.iconSvg.firstChild);
						}

						Array.from(symbolElement.children).forEach(child => {
							this.iconSvg.appendChild(child.cloneNode(true));
						});

						const viewBox = symbolElement.getAttribute('viewBox');
						if (viewBox) {
							this.iconSvg.setAttribute('viewBox', viewBox);
						}
					} else {
						console.warn(`Символ с ID ${idSprite} не найден в спрайте.`);
						this.iconSvg.style.display = 'none';
					}
				} catch (error) {
					console.log(error);
				}
			})();
		}

		if (!active) {
			bg = '';
			br = '#ff540e solid 1px';
			color = '#A9A9A9';
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
			cursor: pointer;
			width: ${width};
			height: ${height}
			}
			
		span {
			color: ${color};
			font-size: ${size};
			font-family:${family}
		
		}

		svg {
			width:${iconW};
			height: ${iconH};
			z-index:100}
		`;

		this.styleElement.textContent = newStyle;
	}
}

customElements.define('custom-buttons', Buttons);
