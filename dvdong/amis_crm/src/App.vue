<template>
  <div class="container">
    <Header></Header>
    <Function></Function>
    <div class="main">
      <router-view>

      </router-view>
    </div>
  </div>
</template>

<script>
import Header from "./components/layout/TheHeader.vue";
import Function from "./components/layout/TheFunction.vue";


export default {
  name: "App",
  components: {
    Header,
    Function,
  },
};
</script>

<style>
@import url("./css/main.css");
/* width */
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
