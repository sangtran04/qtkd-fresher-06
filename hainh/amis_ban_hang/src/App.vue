<template>
  <div class="grid-layout">
    <TheMenu />
    <TheFunction />
    <TheSideBarLeft />
    <TheContent />
    <TheSideBarRight />
  </div>
</template>

<script>
import TheMenu from './components/layout/TheMenu'
import TheFunction from './components/layout/TheFunction.vue'
import TheSideBarLeft from './components/layout/TheSideBarLeft.vue'
import TheContent from './components/layout/TheContent.vue'
import TheSideBarRight from './components/layout/TheSideBarRight.vue'
export default {
  name: 'App',
  components: {
    TheMenu,
    TheFunction,
    TheSideBarLeft,
    TheContent,
    TheSideBarRight,
  },
}
</script>

<style>
@import url('./style/icons.css');
@import url('./style/font.css');
@import url('./style/color.css');
/* reset css */
* {
  padding: 0;
  margin: 0;
  box-sizing: inherit;
  font-family: inherit;
  color: #1f2229;
  line-height: 16px;
  font-size: 13px;
  font-weight: 400;
}

html {
  /* convert 1rem = 10px */
  font-size: 62.5%;
  box-sizing: border-box;
  font-family: Regular;
}

.grid-layout {
  display: grid;
  grid-template-columns: 240px auto 320px;
  grid-template-rows: 84px 64px auto;
  height: 100vh;
  width: 100vw;
}
</style>
