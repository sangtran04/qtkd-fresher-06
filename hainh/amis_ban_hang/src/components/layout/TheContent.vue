<template>
  <div class="content">
    <BaseToastMessage toastMessage="message" type="success" />
  </div>
</template>

<script>
import BaseToastMessage from '../base/BaseToastMessage.vue'
export default { components: { BaseToastMessage } }
</script>

<style scoped>
.content {
  grid-row: 3 / 4;
  grid-column: auto;
  background-color: #bbbb;
}
</style>
