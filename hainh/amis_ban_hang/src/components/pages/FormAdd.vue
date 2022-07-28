<template>
  <MisaToolBar @errorInput="errorInput" />
  <CRMBodyCenter :error="error" />
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
  data() {
    return {
      error: false,
    }
  },
  methods: {
    errorInput() {
      this.error = true
    },
  },
}
</script>

<style scoped></style>
