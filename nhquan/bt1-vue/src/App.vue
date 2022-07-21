<template>
  <TheMenu />
  <TheFunction />
  <TheContent />
  <!-- <BaseTextArea />
  <BaseButton buttonText="Thêm" :class="{'button button__icon button__primary--blue btn--cboleft': true}"/>
  <BaseButton buttonText="Thêm" :class="{'button button__icon button__secondary--green btn--cboleft': true}"/> -->
  
</template>

<script>

import TheMenu from './components/layout/TheMenu.vue'
import TheFunction from './components/layout/TheFunction.vue'
import TheContent from './components/layout/TheContent.vue'
// import BaseButton from './components/base/BaseButton.vue'
// import BaseTextArea from './components/base/BaseTextArea.vue'


export default {
  name: 'App',
  components: {
  TheMenu,
  TheFunction,
  TheContent
  // BaseButton
  // BaseTextArea,
 
  }
}
</script>

<style>
 @import url(./css/main.css);

::-webkit-scrollbar-track {
  background-color: #f1f1f1;
}
::-webkit-scrollbar-thumb:hover {
  background-color: #99a1b2;
}
::-webkit-scrollbar-thumb {
  background-color: #c5c9d3;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:active {
  background-color: #7c869c;
}
</style>
