import { createApp } from './vendor/vue.esm-browser.js';

const Counter = {
    data() {
        return {
            result: 0,
            number1:0,
            number2:0,
            motion:''
        }
    },
    methods: {
        calc() {
            switch(this.motion) {
                case 'sum':
                    this.result=this.number1 + this.number2
                    break;
                case 'subtract':
                    this.result=this.number1-this.number2
                    break;
                case 'divide':
                    this.result=this.number1/this.number2
                    break; 
                case 'multiply':
                    this.result=this.number1*this.number2
                    break;     
                }
            }
        }
    }

createApp(Counter).mount('#app');