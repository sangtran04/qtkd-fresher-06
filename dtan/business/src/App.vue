<template>
<!-- <ToastMessage content="Thành công" :class="[toastStatus.toastMessageError]"/> -->
<Menu /> 
<Function/>
<Content/>
</template>


<script>
import Menu from './components/layout/TheMenu.vue'
import Function from './components/layout/TheFunction.vue'
import Content from './components/layout/TheContent.vue'
// import ToastMessage from './components/base/BaseToast.vue'

export default {
  data () {
    return{
      toastStatus:{
        toastMessageSuccess:'toastmessage--success',
        toastMessageError:'toastmessage--error',
        toastMessageWarning:'toastmessage--warning',
        toastMessageInfo:'toastmessage--info',
      },
    }
  },
  name: 'App',
  components: {
    Menu,Function,Content
    // ToastMessage
  }
}
</script>

<style>
@import url(./css/main.css);
</style>
