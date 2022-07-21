<template>
  <div class="base-check-box">
    <input type="checkbox" :id="`checkbox--${id}`" />
    <label :for="`checkbox--${id}`"></label>
  </div>
</template>

<script>
export default {
  props: {
    // id của button
    id: {
      type: String,
      required: true,
    },
  },
}
</script>

<style scoped>
.base-check-box > input {
  display: none;
}
.base-check-box > label {
  display: block;
  width: 16px;
  height: 16px;
  border: 1px solid #7c869c;
  cursor: pointer;
  border-radius: 4px;
}
.base-check-box > label:hover {
  border-color: #2b4eee;
}
.base-check-box > label::before {
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
  background: transparent url(../../assets/Resource/img/icon_collection.svg)
    no-repeat -176px -16px;
  border: none;
}
</style>