import { createApp } from './vendor/vue.esm-browser.js';

const Calc = {
    data() {
        return {
            result: 0,
            number1: 0,
            number2: 0,
            action: ''
        }
    },
    watch: {
        action: function(action) {
            this.result = this.calc(this.number1, this.number2, action);
        },
        number1: function(number1) {
            this.result = this.calc(number1, this.number2, this.action);
        },
        number2: function(number2) {
            this.result = this.calc(this.number1, number2, this.action);
        }
    },
    methods: {
        calc: function(number1, number, action) {
            switch (action) {
                case 'sum':
                    return this.number1 + this.number2
                case 'subtract':
                    return this.number1 - this.number2
                case 'divide':
                    return this.number1 / this.number2
                case 'multiply':
                    return this.number1 * this.number2
            }
        }
    }
}

createApp(Calc).mount('#app')
