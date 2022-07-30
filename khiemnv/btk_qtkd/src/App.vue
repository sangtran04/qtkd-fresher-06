<template>
  <div id="app">
    <div class="container"  >
     <the-menu />
      <the-function></the-function>
 <the-side-bar-left v-if="showLeftSidebar"></the-side-bar-left>
      <the-content :toggleLeftSidebar="toggleLeftSidebar"></the-content>
      <the-side-bar-right></the-side-bar-right> 

    </div>
  </div>
</template>

<script>

import TheFunction from "./components/layout/TheFunction.vue";
import TheMenu from "./components/layout/TheMenu.vue";
import TheSideBarLeft from "./components/layout/TheSideBarLeft.vue";
import TheSideBarRight from "./components/layout/TheSideBarRight.vue";
import TheContent from "./components/layout/TheContent.vue";


export default {
  name: "App",
  components: {
    TheMenu,
    TheFunction,
    TheSideBarRight,
    TheSideBarLeft,
    TheContent,



},
 data() {
        return {

       showLeftSidebar: true
        }
    },
      methods: {
    //Hàm ẩn hiện sidebar
    toggleLeftSidebar() {
     this.showLeftSidebar = !this.showLeftSidebar;

    },

  },
};
</script>

<style>
@import url('./assets/base.css');
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family:  Roboto, Arial, Helvetica, sans-serif;
  color: #1f2229;
  font-size: 13px;
  font-weight: 400;
}
body {
  padding: 0;
  margin: 0;
}
.container {
  display: grid;
  grid-template-columns: 250px calc(100% - 570px) 320px;
  grid-template-rows: 84px 56px calc(100vh - 140px);
}
</style>
