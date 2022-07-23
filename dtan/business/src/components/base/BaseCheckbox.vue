<template>
  <div class="base__checkbox">
      <input type="checkbox" :id="`checkbox--${id}`" />
    <label :for="`checkbox--${id}`"></label>
  </div>
</template>

<script>
export default {
  props: {
    id: Number,
    contentLabel: String,
  }
}
</script>

<style scoped>
.base__checkbox > input {
  display: none;
}
.base__checkbox > label {
  box-sizing: border-box;
  display: block;
  width: 16px;
  height: 16px;
  border: 1px solid #7c869c;
  cursor: pointer;
  border-radius: 4px;
}
.base__checkbox > label:hover {
  border-color: #2b4eee;
}
.base__checkbox > label::before {
  content: '';
  display: none;
}
input[type='checkbox']:checked + label {
  display: flex;
  justify-content: center;
  color: #fff;
  width: 16px;
  height: 16px;
  cursor: pointer;
  background: transparent url(../../assets/img/icon_collection.svg) no-repeat -176px -16px;
  border: none;
}
</style>