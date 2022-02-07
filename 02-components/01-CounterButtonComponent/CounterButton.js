import { defineComponent } from './vendor/vue.esm-browser.js';

export default defineComponent({
    name: 'CounterButton',
    props: {
        count: {
            type: Number,
            default: 0
        }
    },
    emits: ['update:count'],
    methods: {
        update: function() {
            this.$emit('update:count', this.count + 1);
        }
    },
    template: `<button @click="update" type="button">{{ count }}</button>`,
});
