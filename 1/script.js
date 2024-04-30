class Store {
    #reducer;
    #state;
    #cbs = []

    constructor(reducer, initialState) {
        this.#reducer = reducer;
        this.#state = initialState;
    }

    getState() {
        return this.#state;
    }

    subscribe(cb) {
        this.#cbs.push(cb);
        return () => {
            this.#cbs = this.#cbs.filter(callback => callback !== cb);
        };
    }

    dispatch(action) {
        this.#state = this.#reducer(this.#state, action);
        this.#cbs.forEach(cb => cb());
    }

    get state() {
        return this.getState();
    }
}

class Password {
    #password;

    constructor(password) {
        this.#password = password;
    }

    getPassword() {
        return this.#password;
    }
}

class StoreThunk extends Store {
    dispatch(action) {
        if (typeof action === 'function') {
            action(this.dispatch.bind(this), this.getState.bind(this));
        } else {
            super.dispatch(action);
        }
    }
}

class RGB {
    #r;
    #g;
    #b;

    constructor(r = 0, g = 0, b = 0) {
        this.#r = this.#validateColorValue(r);
        this.#g = this.#validateColorValue(g);
        this.#b = this.#validateColorValue(b);
    }

    #validateColorValue(value) {
        if (typeof value !== 'number' || value < 0 || value > 255) {
            throw new RangeError('Color value must be a number between 0 and 255');
        }
        return value;
    }

    get r() {
        return this.#r;
    }

    set r(value) {
        this.#r = this.#validateColorValue(value);
    }

    get g() {
        return this.#g;
    }

    set g(value) {
        this.#g = this.#validateColorValue(value);
    }

    get b() {
        return this.#b;
    }

    set b(value) {
        this.#b = this.#validateColorValue(value);
    }

    get rgb() {
        return `rgb(${this.#r},${this.#g},${this.#b})`;
    }

    get hex() {
        return `#${this.#r.toString(16).padStart(2, '0')}${this.#g.toString(16).padStart(2, '0')}${this.#b.toString(16).padStart(2, '0')}`;
    }

    set rgb(value) {
        const match = value.match(/^rgb\((\d{1,3}),(\d{1,3}),(\d{1,3})\)$/);
        if (match) {
            this.#r = this.#validateColorValue(parseInt(match[1]));
            this.#g = this.#validateColorValue(parseInt(match[2]));
            this.#b = this.#validateColorValue(parseInt(match[3]));
        } else {
            throw new SyntaxError('Invalid RGB syntax');
        }
    }

    set hex(value) {
        const match = value.match(/^#([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/);
        if (match) {
            this.#r = this.#validateColorValue(parseInt(match[1], 16));
            this.#g = this.#validateColorValue(parseInt(match[2], 16));
            this.#b = this.#validateColorValue(parseInt(match[3], 16));
        } else {
            throw new SyntaxError('Invalid HEX syntax');
        }
    }
}

class RGBA extends RGB {
    #a;

    constructor(r = 0, g = 0, b = 0, a = 1) {
        super(r, g, b);
        this.#a = this.#validateAlphaValue(a);
    }

    #validateAlphaValue(value) {
        if (typeof value !== 'number' || value < 0 || value > 1) {
            throw new RangeError('Alpha value must be a number between 0 and 1');
        }
        return value;
    }

    get a() {
        return this.#a;
    }

    set a(value) {
        this.#a = this.#validateAlphaValue(value);
    }

    get rgba() {
        return `rgba(${this.#r},${this.#g},${this.#b},${this.#a})`;
    }

    set rgba(value) {
        const match = value.match(/^rgba\((\d{1,3}),(\d{1,3}),(\d{1,3}),([01]?(\.\d+)?)\)$/);
        if (match) {
            this.#r = this.#validateColorValue(parseInt(match[1]));
            this.#g = this.#validateColorValue(parseInt(match[2]));
            this.#b = this.#validateColorValue(parseInt(match[3]));
            this.#a = this.#validateAlphaValue(parseFloat(match[4]));
        } else {
            throw new SyntaxError('Invalid RGBA syntax');
        }
    }

    set hex(value) {
        const match = value.match(/^#([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/);
        if (match) {
            this.#r = this.#validateColorValue(parseInt(match[1], 16));
            this.#g = this.#validateColorValue(parseInt(match[2], 16));
            this.#b = this.#validateColorValue(parseInt(match[3], 16));
            this.#a = this.#validateAlphaValue(parseInt(match[4], 16) / 255);
        } else {
            super.hex = value.substring(0, 7); // Ignoring alpha part
        }
    }

    set color(value) {
        if (value.startsWith('#')) {
            this.hex = value;
        } else if (value.startsWith('rgba(')) {
            this.rgba = value;
        } else if (value.startsWith('rgb(')) {
            this.rgb = value;
        } else {
            throw new SyntaxError('Invalid color syntax');
        }
    }
}

// Перевірка

const rgb = new RGB();
rgb.r = 15;
rgb.g = 128;
rgb.b = 192;
console.log(rgb.hex);
console.log(rgb.rgb);
rgb.hex = '#2030FF';
console.log(rgb.rgb);
rgb.rgb = 'rgb(100,90,50)';
console.log(rgb.r, rgb.g, rgb.b);

const rgba = new RGBA();
rgba.hex = '#80808080';
console.log(rgba.a);
console.log(rgba.rgba);
rgba.r = 192;
rgba.a = 0.25;
console.log(rgba.hex);

rgba.color = 'rgba(1,2,3,0.70)';
rgba.b *= 10;
console.log(rgba.hex);
