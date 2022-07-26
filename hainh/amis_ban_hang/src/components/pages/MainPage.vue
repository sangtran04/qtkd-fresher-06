<template>
  <div class="main-page">
    <TheFunction title="Tiềm năng của tôi" />
    <TheSideBarLeft />
    <MainContent />
    <TheSideBarRight />
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
  display: grid;
  grid-template-rows: 56px auto;
  grid-template-columns: 249px auto 320px;
  width: 100%;
  height: 100%;
  position: relative;
}
</style>
