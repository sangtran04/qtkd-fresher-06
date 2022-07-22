<template>
  <div class="crm-checkbox">
    <input type="checkbox" class="checkbox" />
    <span class="checkbox-name">{{ nameFilter }}</span>
  </div>
</template>

<script>
export default {
  name: "BaseCheckbox",
  components: {},
  props: {
    nameFilter: {
      type: String,
      default: "CheckBox",
    },
    checked: {
      type: Boolean,
      default: false,
    },
  },
  computed: {},
};
</script>

<style>
.crm-checkbox {
  display: flex;
  padding: 7px 0px;
}
.checkbox {
  width: 16px;
  height: 16px;
  margin: 0px;
}
.checkbox-name {
  font-family: Regular;
  font-size: 13px;
  padding-left: 8px;
}
</style>
