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
        sum(a,b){
            this.result=a+b
        },
        subtract(a,b) {
            this.result=a-b
        },
        divide(a,b) {
            this.result=a/b
        },
        multiply(a,b) {
            this.result=a*b
        }
    }
}

createApp(Counter).mount('#app');