import { createApp } from './vendor/vue.esm-browser.js';

const Calc = {
    data() {
        return {
            number1: 0,
            number2: 0,
            action: ''
        }
    },
    computed: {
        result: function() {
            switch (this.action) {
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
