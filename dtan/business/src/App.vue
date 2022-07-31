<template>
  <Menu />
  <Content />

  
</template>


<script>
import Menu from "./components/layout/TheMenu.vue";
import Content from "./components/layout/TheContent.vue";



export default {
  name: "App",
  components: {
    Menu,
    Content,
},
};
</script>

<style>
@import url(./css/main.css);
::-webkit-scrollbar{
  width: 10px;
  height: 10px;
  background-color: transparent;
}
::-webkit-scrollbar-track {
  background-color: #f1f1f1 !important;
}
::-webkit-scrollbar-thumb:hover {
  background-color: #99a1b2 !important;
}
::-webkit-scrollbar-thumb {
  background-color: #c5c9d3 !important;
  border-radius: 10px;
  border: 1px solid transparent;
  /* -webkit-background-clip: content-box; */
}

::-webkit-scrollbar-thumb:active {
  background-color: #7c869c !important;
}
</style>
