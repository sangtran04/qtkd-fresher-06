<template>
  <div class="grid-layout">
    <TheMenu />
    <TheContent>
      <router-view />
    </TheContent>
  </div>
</template>

<script>
import TheMenu from './components/layout/TheMenu'
import TheContent from './components/layout/TheContent.vue'
export default {
  name: 'App',
  components: {
    TheMenu,
    TheContent,
  },
}
</script>

<style>
@import url('./style/icons.css');
@import url('./style/font.css');
@import url('./style/root.css');
@import url('./style/scroll-bar.css');
/* reset css */
* {
  padding: 0;
  margin: 0;
  box-sizing: inherit;
  font-family: inherit;
  color: #1f2229;
  line-height: 16px;
  font-size: 13px;
}

html {
  /* convert 1rem = 10px */
  font-size: 62.5%;
  box-sizing: border-box;
  font-family: Regular;
}

.grid-layout {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 84px auto;
  height: 100vh;
  width: 100vw;
}
</style>
