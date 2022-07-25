<template>
  <div class="checkbox__item">
    <BaseCheckbox :id="uuidv4()"/>
    <label>{{ contentLabel }}</label>
  </div>
</template>

<script>
import BaseCheckbox from "./BaseCheckbox.vue";
import uuidv4 from '../../constants/checkbox-id'
export default {
  props: {
    contentLabel: {
      type: String,
      default: "",
    },
  },
   setup() {
    return {
      uuidv4
    };
  },
  components: { BaseCheckbox },
};
</script>

<style scoped>
</style>