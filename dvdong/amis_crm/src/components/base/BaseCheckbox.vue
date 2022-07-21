<template>
    <input type="checkbox" :id="checkboxId" :checked="checked"/>
    <label :for="checkboxId"> {{ checkboxLabel }} </label>
</template>

<script>
export default {
  props: {
    // id của button
    checkboxId: {
      type: String,
      required: true,
    },
    checkboxLabel: {
      type: String,
      required: true,
    },
    checked: {
      type: Boolean,
      default: false,
    },
  },
  
};
</script>

<style scoped>

input {
  width: 16px;
  height: 16px;
  margin-right: 9.5px;
  border-radius: 1.5px;
  border: 1px solid #586074;
  cursor: pointer;
}

label {
  cursor: pointer;
}
</style>
