<template>
  <div class="checkbox__item">
    <BaseCheckbox />
    <label>{{ contentLabel }}</label>
  </div>
</template>

<script>
import BaseCheckbox from "./BaseCheckbox.vue";

export default {
  props: {
    contentLabel: {
      type: String,
      default: "",
    },
  },
  components: { BaseCheckbox },
};
</script>

<style scoped>
</style>