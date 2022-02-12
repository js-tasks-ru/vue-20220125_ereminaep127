<template>
  <div class="toasts">
    <toast
      v-for="toast in toasts"
      :key="toast.id"
      :type="toast.type"
      :message="toast.message"
      :icon="$options.settings.icons[toast.type]"
    ></toast>
  </div>
</template>

<script>
import Toast from './Toast';

export default {
  name: 'TheToaster',
  components: { Toast },
  settings:{
      icons:{
      success:'check-circle',
      error:'alert-circle'
    }
  },
  data(){
    return {
      id:0,
      toasts:[],
    }
  },
  methods:{
    addToast(message,type){
      this.toasts.push({
        id:this.id,
        message:message,
        type:type
      });
      setTimeout(() => { this.toasts.shift() }, 5000);
      this.id++;
    },
    error(message){
      this.addToast(message,'error');
    },
    success(message){
      this.addToast(message,'success');
    }
  }
};
</script>

<style scoped>
.toasts {
  position: fixed;
  bottom: 8px;
  right: 8px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  white-space: pre-wrap;
  z-index: 999;
}

@media all and (min-width: 992px) {
  .toasts {
    bottom: 72px;
    right: 112px;
  }
}
</style>
