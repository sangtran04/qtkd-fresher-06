<template>
  <button :style="{ background, color }">Button</button>
</template>
<script>
export default {
  props: {
    color: {
      type: String,
    },
    background: {
      type: String,
    },
    disabled: {
      type: Boolean,
    },
  },
};
</script>
<style scoped>
button {
  display: inline-block;
    text-decoration: none;
    /* background-color: transparent; */  
    border: none;
    outline: none;
    padding:  0 8px;
    border-radius: 4px;
    min-width: 20px;
    height: 32px;
    line-height: 32px;
    background-color: #4262F0;
    color: #FFFFFF;
    font-size: 13px;
    font-weight: 500;
    text-align: center;
}
</style>