<template>
  <button @click="localCount ++">{{ localCount }}</button>
</template>

<script>
export default {
  name: 'CounterButton',
  props: {
    count: {
      type: Number,
      default: 0,
    },
  },
  emits: ['update:count'],
  data() {
    return {
        localCount: this.count
      }
  },
  watch: {
    localCount: {
      deep: true,
      handler(newValue) {
        this.$emit('update:count', newValue);
      },
    },
    count: {
      handler() {
        this.localCount = this.count;
      },
    },
  },
};
</script>
