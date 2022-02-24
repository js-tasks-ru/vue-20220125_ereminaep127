<template>
  <ui-input
    v-model="modelValueProxy"
    v-bind="$attrs"
    :type="type"
    @input="$emit('update:modelValue', $event.target.valueAsNumber)"
  >
    <template v-for="slotName in Object.keys($slots)" #[slotName]>
      <slot :name="slotName" />
    </template>
  </ui-input>
</template>

<script>
import UiInput from './UiInput';

export default {
  name: 'UiInputDate',
  components: { UiInput },
  inheritAttrs: false,
  props: {
    type: {
      type: String,
      default: 'date',
    },
    modelValue: {
      type: Number,
      default: null,
    },
  },
  emits: ['update:modelValue'],
  computed: {
    modelValueProxy: {
      get() {
        if (!this.modelValue) {
          return '';
        }
        let date = new Date(this.modelValue);
        switch (this.type) {
          case 'date': {
            return date.toISOString().split('T')[0];
          }
          case 'time': {
            return `${date.toISOString().split('T')[1].split(':')[0]}:${
              date.toISOString().split('T')[1].split(':')[1]
            }`;
          }
          case 'datetime-local': {
            return date.toISOString().split('.')[0];
          }
        }
        return this.modelValue;
      },
      set(value) {
        this.$emit('update:modelValue', value);
      },
    },
  },
};
</script>
