import { createApp } from './vendor/vue.esm-browser.js';

const Counter = {
    data() {
        return {
            count: 0
        }
    },
    methods: {
        up() {
            this.count++;
        }
    }
}

createApp(Counter).mount('#app')
