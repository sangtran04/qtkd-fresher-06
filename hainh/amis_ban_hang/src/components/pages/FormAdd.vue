<template>
  <MisaToolBar />
  <CRMBodyCenter />
</template>

<script>
import MisaToolBar from '../base/MisaToolBar.vue'
import CRMBodyCenter from '../base/CRM_BodyCenter.vue'
export default {
  name: 'NewPotential',
  components: {
    MisaToolBar,
    CRMBodyCenter,
  },
}
</script>

<style scoped></style>
