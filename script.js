'use strict';

class Element {
    _createElement() {
        this.element = document.createElement(this.type);
    }

    _setAttr() {    
        for (let key in this) {
            this.element[key] = this[key];
        };
    }

    append(parent = document.body) {
        this._createElement();
        this._setAttr();
        parent.append(this.element);
    }
}

class Button extends Element {
    constructor(text) {
        super();
        this.textContent = text;
        this.type = 'button';
        this.className = 'btn btn-lg';
        this.onclick = () => console.log(this.textContent);
    }
}

class Number extends Button {
    constructor(number) {
        super(number);
        this.className = this.className + ' btn-primary';
        this.append();
    }
}

class Operator extends Button {
    constructor(operator) {
        super(operator);
        this.className = this.className + ' btn-danger';
        this.append();
    }
}

class Display extends Element {
    constructor() {
        super();
        this.type = 'h1';
        this.textContent = '0';
        this.append();
    }

    update(val) {
        this.text = '0' ? val : this.text + val;
    }
}

class Calculator {
    constructor() {
        this.display = new Display();
        this.button = {};
        for (let i = 0; i < 10; i++) {
            this.button[i] = new Number(i + '');
        };
        
        let operators = ['+', '-', 'x', '/'];
        this.operator = {};
        operators.forEach( (op) => this.operator[op] = new Operator(op) );
    }
}

let calc = new Calculator();