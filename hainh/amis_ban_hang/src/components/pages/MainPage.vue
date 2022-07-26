<template>
  <div class="main-page">
    <TheFunction title="Tiềm năng của tôi" />
    <div class="flex-layout">
      <TheSideBarLeft />
      <MainContent />
      <TheSideBarRight />
    </div>
  </div>
</template>

<script>
import TheSideBarLeft from '../layout/TheSideBarLeft.vue'
import MainContent from '../layout/MainContent.vue'
import TheSideBarRight from '../layout/TheSideBarRight.vue'
import TheFunction from '../layout/TheFunction.vue'
export default {
  name: 'MainPage',
  components: { TheSideBarLeft, MainContent, TheSideBarRight, TheFunction },
}
</script>

<style scoped>
.main-page {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  position: relative;
}
.flex-layout {
  display: flex;
  flex-direction: row;
  height: 100%;
}
</style>
