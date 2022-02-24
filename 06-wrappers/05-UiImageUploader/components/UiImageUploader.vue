<template>
  <div class="image-uploader">
    <label
      class="image-uploader__preview"
      :class="{ 'image-uploader__preview-loading': state == 'loading' }"
      :style="{ '--bg-url': preview ? 'url(' + preview + ')' : '' }"
      @click="removeAction"
    >
      <span class="image-uploader__text">
        <template>{{ text[state] }}</template>
      </span>
      <input
        type="file"
        accept="image/*"
        :value="modelValueProxy"
        v-bind="$attrs"
        :disabled="state == 'loading'"
        class="image-uploader__input"
        @change="load"
        @click="remove"
      />
    </label>
  </div>
</template>

<script>
export default {
  name: 'UiImageUploader',
  inheritAttrs: false,
  props: {
    preview: String,
    uploader: Function,
  },
  emits: ['remove', 'upload', 'error', 'select'],
  data() {
    return {
      state: '',
    };
  },
  computed: {
    modelValueProxy: {
      get() {
        return this.modelValue;
      },
    },
    text() {
      return {
        loading: 'Загрузка...',
        remove: 'Удалить изображение',
        load: 'Загрузить изображение',
      }
    },
  },
  created() {
    this.state = this.preview ? 'remove' : 'load';
  },
  methods: {
    removeAction(event) {
      if (this.preview) {
        this.$emit('remove');
        this.state = 'load';
        event.preventDefault();
      }
    },
    load(event) {
      let file = event.target.files[0];
      if (file) {
        this.$emit('select', file);
        this.state = 'loading';
        if (typeof this.uploader == 'function') {
          this.uploader(file).then(
            (file) => {
              this.$emit('upload', file);
              this.state = 'remove';
            },
            (result) => {
              this.state = 'load';
              this.$emit('error', result);
            },
          );
        } else {
          this.state = 'remove';
        }
      }
    },
    remove() {
      this.$emit('remove');
      this.state = 'load';
    },
  },
};
</script>

<style scoped>
.image-uploader {
}

.image-uploader__input {
  opacity: 0;
  height: 0;
}

.image-uploader__preview {
  --bg-url: var(--default-cover);
  background-size: cover;
  background-position: center;
  background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), var(--bg-url);
  border: 2px solid var(--blue-light);
  border-radius: 8px;
  transition: 0.2s border-color;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 512px;
  height: 228px;
}

.image-uploader__text {
  color: var(--white);
  font-family: 'Nunito', sans-serif;
  font-weight: 600;
  font-size: 20px;
  line-height: 28px;
}

.image-uploader__preview:hover {
  border-color: var(--blue);
}

.image-uploader__preview.image-uploader__preview-loading {
  cursor: no-drop;
}
</style>
